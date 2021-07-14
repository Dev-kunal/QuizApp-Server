const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const questions = require("./dataEntry");
const authVerify = require("./middleware/authVerify");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const initializedDBConnection = require("./db/db.connect");
const userRouter = require("./routes/user.routes");
const quizRouter = require("./routes/quiz.routes");
const Quiz = require("./models/quiz.model");

initializedDBConnection();
app.use("/user", userRouter);
app.use("/quiz", authVerify, quizRouter);

app.get("/", (req, res) => {
  res.json({ mesg: "Hello Quiz Backend app!" });
});

// to insert questions
// app.get("/q", async (req, res) => {
//   try {
//     const result = await Quiz.insertMany(questions);
//     res.json({ success: true, result });
//   } catch (err) {
//     res.json({ success: false, mesg: err.message });
//   }
// });

// route 404 do not move
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "route not found on server",
  });
});

app.listen(5000, () => {
  console.log("server started");
});

module.exports = urlencodedParser;
