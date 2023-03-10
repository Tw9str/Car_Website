const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Register User
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const HashedPassword = await bcrypt.hash(password, salt);
  const user = new User({ name, email, password: HashedPassword });
  try {
    await user.save();
    console.log("User saved");
    res.status(201).send("User saved");
  } catch (error) {
    console.log("Error saving user", error);
    res.status(500).send("Error saving user");
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res
      .status(200)
      .json({ token, user, success: true, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = { register, login };
