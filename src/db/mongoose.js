const mongoose = require("mongoose");
// const validator = require("validator");

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// const User = mongoose.model("User", {
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Email is invalid.");
//             }
//         },
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error("Age must be a positive number!");
//             }
//         },
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes("password")) {
//                 throw new Error("Password cannot contain 'password'!");
//             }
//         },
//     },
// });

// const me = new User({
//     name: " JY ",
//     email: "MYEMAIL@GMAIL.COM ",
//     password: "   teat111",
// });

// me.save()
//     .then((result) => {
//         console.log(me);
//     })
//     .catch((error) => {
//         console.log("Error!", error);
//     });

// const Task = mongoose.model("tasks", {
//     description: {
//         type: String,
//         trim: true,
//         required: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     },
// });

// const task = new Task({
//     description: "   Learn Mongoose",
//     completed: true,
// });

// task.save()
//     .then(() => {
//         console.log(task);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
