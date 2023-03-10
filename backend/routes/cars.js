const express = require("express");
const { getCars } = require("../controllers/cars");

const router = express.Router();

router.get("/", getCars);

module.exports = router;
