const express = require("express");
const router = express.Router();
const { PostProjectByclient } = require("../controller/user");

router.post("/orderNow", PostProjectByclient);
module.exports = router;
