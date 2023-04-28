const express = require("express");
const {
  bookAppointmnetController,
  checkAvailabilityController,
  dentistAppointmentsController,
  updateAppointmentController,
  deleteAppointmentByIdController,
  getAppointmentByIdController,
} = require("../controllers/appointmentControllers");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/bookAppointment", authMiddleware, bookAppointmnetController);
router.post("/checkAvailability", authMiddleware, checkAvailabilityController);
router.put(
  "/updateAppointmentProfile/:appointmentId",
  authMiddleware,
  updateAppointmentController
);
router.get(
  "/getAppointmentById/:appointmentId",
  authMiddleware,
  getAppointmentByIdController
);
router.delete(
  "/deleteAppointmentById/:appointmentId",
  authMiddleware,
  deleteAppointmentByIdController
);
module.exports = router;
