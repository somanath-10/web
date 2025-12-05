const express = require('express');
const router = express.Router();

const {createUser,fecthAdmin, Vote} = require('../controller/adminUser');
const{auth} = require("../middleware/auth");
router.post("/createuser",createUser);
router.get("/fetchadmin",auth,fecthAdmin);
router.post("/sub",auth,Vote);
module.exports = router;