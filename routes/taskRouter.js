const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const taskController = require("../controllers/taskController");

router.get("/", auth, taskController.getUsersTasks);
router.post("/", auth, taskController.createTask);
router.delete("/:id", auth, taskController.deleteTask);

router.patch("/:id", auth, taskController.updateTask);
router.get("/:id", auth, taskController.getTask);

module.exports = router;
