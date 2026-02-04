const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post("/registration", userController.registration);
router.post("/login", userController.login);

router.get("/me", auth, userController.getUser);
router.patch("/me/areas", auth, userController.addArea);

// For Test and dev
// router.get("/", userController.getUsers);
router.delete("/:id", userController.deleteUser); // Strech Goal : Delete your account

module.exports = router;
