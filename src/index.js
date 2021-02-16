const app = require("./app");

// const express = require("express");
// require("./db/mongoose.js");
// const userRouter = require("./routers/user");
// const taskRouter = require("./routers/task");

// const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send("GET requests are disabled");
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send("The site is on mantenance, plz try again later");
// });

// const multer = require("multer");
// const upload = multer({
//     dest: "images",
//     limits: {
//         fileSize: 1000000,
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error("File must be a PDF."));
//         }

//         cb(undefined, true);
//         // cb(new Error("File must be a PDF."))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     },
// });

// const erroMiddleware = (req, res, next) => {
//     throw new Error("From my middleware");
// };

// app.post(
//     "/upload",
//     upload.single("upload"),
//     (req, res) => {
//         res.send();
//     },
//     (error, req, res, next) => {
//         res.status(400).send({ error: error.message });
//     }
// );

// app.use(express.json());
// app.use(userRouter);
// app.use(taskRouter);

// const router = new express.Router();
// router.get("/test", (req, res) => {
//     res.send("This is from my other router.");
// });
// app.use(router);

app.listen(port, () => {
    console.log("Server is up on port " + port);
});
