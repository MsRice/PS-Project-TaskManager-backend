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
  { _id: true },
);

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  area: {
    name: { type: String, required: true },
    color: { type: String },
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
