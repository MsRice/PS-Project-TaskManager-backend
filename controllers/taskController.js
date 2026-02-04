const { validate } = require("../models/Task.js");
const Task = require("../models/Task.js");

async function getUsersTasks(req, res) {
  console.log("req.user:", req.user);
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function createTask(req, res) {
  try {
    const createdTask = await Task.create({ ...req.body, userId: req.user.id });
    res.status(200).json(createdTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function deleteTask(req, res) {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}
const ALLOWED_UPDATES = [
  "title",
  "description",
  "status",
  "todos",
  "tags",
  "dueDate",
  "area",
];

async function updateTask(req, res) {
  try {
    const updates = {};

    // Doing this so i cant accidently pass anythibg wrong

    Object.keys(req.body).forEach((key) => {
      if (ALLOWED_UPDATES.includes(key)) {
        updates[key] = req.body[key];
      }
    });

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No valid fields provided" });
    }

    // ////////////////////////////////

    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { $set: updates },
      { new: true, runValidators: true },
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function getTask(req, res) {
  try {
    const tasks = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getUsersTasks,
  createTask,
  deleteTask,
  updateTask,
  getTask,
};
