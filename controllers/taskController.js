const { validate } = require("../models/Task.js");
const Task = require("../models/Task.js");

async function getUsersTasks(req, res) {
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

async function updateTask(req, res) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
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
