const express = require("express");
const {
  getAllUsersController,
  changeAccountStatusController,
} = require("../controllers/adminControllers");
const {
  getAllAppointmentsController,
  getAppointmentByIdController,
  updateAppointmentController,
  deleteAppointmentByIdController,
  bookAppointmnetController,
  checkAvailabilityController,
} = require("../controllers/appointmentControllers");
const {
  registerController,
  dentistController,
  getUserByIdController,
  updateUserProfileController,
  deleteUserByIdController,
} = require("../controllers/userControllers");
const {
  getAllDentistsController,
  getDentistByIdController,
  updateDentistProfileController,
  deleteDentistByIdController,
} = require("../controllers/dentistControllers");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

router.post("/createUser", authMiddleware, registerController);
router.post("/createDentist", authMiddleware, dentistController);
router.post("/bookAppointment", authMiddleware, bookAppointmnetController);

router.get("/getAllUsers", authMiddleware, getAllUsersController);
router.get("/getAllDentists", authMiddleware, getAllDentistsController);
router.get("/getAllAppointments", authMiddleware, getAllAppointmentsController);

router.get("/getUserById/:userId", authMiddleware, getUserByIdController);
router.get(
  "/getDentistById/:dentistId",
  authMiddleware,
  getDentistByIdController
);
router.get(
  "/getAppointmentById/:appointmentId",
  authMiddleware,
  getAppointmentByIdController
);

router.put(
  "/updateUserProfile/:userId",
  authMiddleware,
  updateUserProfileController
);
router.put(
  "/updateDentistProfile/:dentistId",
  authMiddleware,
  updateDentistProfileController
);
router.put(
  "/updateAppointmentProfile/:appointmentId",
  authMiddleware,
  updateAppointmentController
);

router.delete("/deleteUser/:userId", authMiddleware, deleteUserByIdController);
router.delete(
  "/deleteDentist/:dentistId",
  authMiddleware,
  deleteDentistByIdController
);
router.delete(
  "/deleteAppointmentById/:appointmentId",
  authMiddleware,
  deleteAppointmentByIdController
);

router.post("/bookAppointment", authMiddleware, bookAppointmnetController);
router.post("/checkAvailability", authMiddleware, checkAvailabilityController);

module.exports = router;
