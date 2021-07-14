const express = require("express");
const router = express.Router();
const login = require("../controllers/auth/login");
const signup = require("../controllers/auth/signup");

router.route("/").get((req, res) => {
  res.json({ mesg: "Hello User" });
});

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
