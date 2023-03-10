const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const multer = require("multer");
const verifyToken = require("./middleware/auth");
const { addCar } = require("./controllers/cars");
const authRoutes = require("./routes/auth");
const carRoutes = require("./routes/cars");
const addCarRoutes = require("./routes/addCar");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded());

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", () => console.log("connection error"));
db.once("open", () => console.log("Connected to MongoDB Atlas"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/api/car/add", verifyToken, upload.array("images"), addCar);

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/car", verifyToken, addCarRoutes);

/* Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
