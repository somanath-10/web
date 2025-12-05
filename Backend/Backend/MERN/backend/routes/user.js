const express = require("express");
const router = express.Router();
const { signup,login } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
router.post("/signup", signup);
router.post("/login",login);
router.get("/getallUsers", getUser);

module.exports = router;
