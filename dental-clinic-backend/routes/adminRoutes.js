const express = require("express");
const {
  getAllUsersController,
  changeAccountStatusController,
} = require("../controllers/adminControllers");
const {
  getAllAppointmentsController,
  deleteAppointmentByIdController,
  bookAppointmnetController,
} = require("../controllers/appointmentControllers");
const {
  registerController,
  dentistController,
  getUserByIdController,
  deleteUserByIdController,
} = require("../controllers/userControllers");
const {
  getAllDentistsController,
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
router.delete("/deleteUser/:userId", authMiddleware, deleteUserByIdController);
router.delete(
  "/deleteDentist/:dentistId",
  authMiddleware,
  deleteDentistByIdController
);
router.delete(
  "/deleteAppointment/:appointmentId",
  authMiddleware,
  deleteAppointmentByIdController
);

module.exports = router;
