const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    km: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagesPath: {
      type: [String],
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;