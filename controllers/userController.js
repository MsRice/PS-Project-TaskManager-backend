const { validate } = require("../models/User.js");
const User = require("../models/User.js");

const jwt = require("jsonwebtoken");

async function registration(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Plese give a username, email and password",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "This emailed has already been registered",
      });
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        user_img:
          "https://static.vecteezy.com/system/resources/thumbnails/068/203/135/small/abstract-human-silhouette-with-blue-gradient-isolated-on-transparent-background-png.png",
        areas: [{ name: "Task", color: "#cf4d6f" }],
      },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Missing email or password",
      });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
      });
    }

    const isValidPass = await user.isCorrectPassword(password);
    if (!isValidPass) {
      return res.status(400).json({
        message: "Incorrect email or password",
      });
    }
    const payload = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        user_img: user.user_img,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function getUser(req, res) {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    return res.status(500).json({ message: "Token is invalid or expired" });
  }
}

// These func is not in use for production -- dev only 😝
async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const deletedusers = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedusers);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function addArea(req, res) {
  const { area } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { $push: { areas: area } },
      {
        new: true,
        runValidators: true,
      },
    ).select("-password");
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  registration,
  login,
  getUsers,
  getUser,
  deleteUser,
  addArea,
};
