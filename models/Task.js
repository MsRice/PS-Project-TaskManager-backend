const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false },
);

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  area: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  todos: {
    type: [todoSchema],
    default: [],
  },

  tags: {
    type: [String],
    default: [],
  },

  dueDate: {
    type: Date,
  },

  status: {
    type: Boolean,
    default: false,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
