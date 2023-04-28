const express = require("express");
const {
  loginController,
  registerController,
  dentistController,
  updateUserProfileController,
  deleteUserByIdController,
} = require("../controllers/userControllers");
const {
  getAllDentistsController,
  getDentistByIdController,
} = require("../controllers/dentistControllers");
const {
  userAppointmentsController,
  bookAppointmnetController,
  checkAvailabilityController,
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
router.delete(
  "/deleteUserById/:userId",
  authMiddleware,
  deleteUserByIdController
);

router.get("/getAllDentists", authMiddleware, getAllDentistsController);
router.get(
  "/getDentistById/:dentistId",
  authMiddleware,
  getDentistByIdController
);
router.get("/userAppointments", authMiddleware, userAppointmentsController);

router.post("/bookAppointment", authMiddleware, bookAppointmnetController);
router.post("/checkAvailability", authMiddleware, checkAvailabilityController);

module.exports = router;
