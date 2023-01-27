
const express = require("express");
const router = express.Router();
const create = require('./money.controller')
router.post("/testss",create.addRequest);
module.exports = router;
