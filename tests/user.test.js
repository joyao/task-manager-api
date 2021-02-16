const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { userOneId, userOne, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should sigup a new user", async () => {
    const response = await request(app)
        .post("/users")
        .send({
            name: "JY",
            email: "gelabmatter@testtesttestt.ggg",
            password: "MyPass777",
        })
        .expect(201);

    //Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    //Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: "JY",
            email: "gelabmatter@testtesttestt.ggg",
        },
        token: user.tokens[0].token,
    });
    expect(user.password).not.toBe("MyPass777");
});

test("Should login existing user", async () => {
    const response = await request(app)
        .post("/users/login")
        .send({
            email: userOne.email,
            password: userOne.password,
        })
        .expect(200);
    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);
});

test("Should not login not existing user", async () => {
    await request(app)
        .post("/users/login")
        .send({
            email: userOne.email + "test",
            password: userOne.password,
        })
        .expect(400);
});

test("Should get profile for user", async () => {
    await request(app)
        .get("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test("Should not get profile for unauthenticated user", async () => {
    await request(app).get("/users/me").send().expect(401);
});

test("Should delete account for user", async () => {
    const response = await request(app)
        .delete("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user).toBeNull();
});

test("Should not delete account for unauthenticated user", async () => {
    await request(app).delete("/users/me").send().expect(401);
});

test("Should upload avatar image", async () => {
    await request(app)
        .post("/users/me/avatar")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .attach("avatar", "tests/fixtures/profile-pic.jpg")
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));
});

test("Should update valid user fields", async () => {
    await request(app)
        .patch("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: "JY RE",
            email: "JYRE@testtesttestt.ggg",
            age: 26,
        })
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user.name).toEqual("JY RE");
});

test("Should not update valid user fields", async () => {
    await request(app)
        .patch("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            nickname: "JO",
        })
        .expect(400);
});
