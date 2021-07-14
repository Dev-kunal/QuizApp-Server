const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: "Category is required",
  },
  question: {
    type: String,
    required: "Question is required",
    unique: true,
  },
  points: {
    type: Number,
    required: "Points are required",
  },
  negativePoints: {
    type: Number,
    required: "Points are required",
  },
  options: {
    type: Array,
    required: "Options are required",
  },
});

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;
