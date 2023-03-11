const express = require("express");
const { deleteCar } = require("../controllers/cars");

const router = express.Router();

router.delete("/delete/:id", deleteCar);
module.exports = router;
