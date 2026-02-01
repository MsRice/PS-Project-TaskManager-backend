const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);

// For Test and dev
router.get("/", userController.getUsers);
router.delete("/:id", userController.deleteUser); // Strech Goal : Delete your account
router.put("/:id", userController.updateUser);

module.exports = router;
