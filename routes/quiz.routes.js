const express = require("express");
const Quiz = require("../models/quiz.model");
const router = express.Router();

router.route("/").post(async (req, res) => {
  let category = req.body.category;
  try {
    const quiz = await Quiz.find({ category });
    res.status(201).json({ success: true, quiz });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, errorMessage: "Something went wrong" });
  }
});

module.exports = router;
