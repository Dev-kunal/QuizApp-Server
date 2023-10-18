const express = require("express");
const cors = require("cors");
const authVerify = require("./middleware/authVerify");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

const initializedDBConnection = require("./db/db.connect");
const userRouter = require("./routes/user.routes");
const quizRouter = require("./routes/quiz.routes");
const routeHandler = require("./middleware/routeHandler");

initializedDBConnection();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/user", userRouter);
app.use("/quiz", authVerify, quizRouter);

app.get("/", (req, res) => {
  res.json({ success: true, mesg: "Hello Quiz Backend app!" });
});

// route 404 do not move
app.use(routeHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("server started");
});
