const express = require("express");
const Quiz = require("../models/quiz.model");
const router = express.Router();

router.route("/").post(async (req, res) => {
  let category = req.body.category;
  // console.log(category);
  try {
    const quiz = await Quiz.find({ category });
    res.json({ success: true, quiz });
  } catch (err) {
    res.json({ success: false, errorMessage: "Something went wrong" });
  }
});

module.exports = router;
