const express = require("express");
const {
  loginController,
  registerController,
  dentistController,
  updateUserProfileController,
  getUserByIdController,
  deleteUserByIdController,
} = require("../controllers/userControllers");
const {
  getAllDentistsController,
} = require("../controllers/dentistControllers");
const {
  userAppointmentsController,
} = require("../controllers/appointmentControllers");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/createDentist", authMiddleware, dentistController);

router.put(
  "/updateUserProfile/:userId",
  authMiddleware,
  updateUserProfileController
);
router.get("/getUserById/:userId", authMiddleware, getUserByIdController);
router.delete(
  "/deleteUserById/:userId",
  authMiddleware,
  deleteUserByIdController
);

router.get("/getAllDentists", authMiddleware, getAllDentistsController);
router.post("/userAppointments", authMiddleware, userAppointmentsController);
module.exports = router;
