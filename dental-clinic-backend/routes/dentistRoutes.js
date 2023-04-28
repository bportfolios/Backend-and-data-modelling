const express = require("express");
const {
  getAllDentistsController,
  updateDentistProfileController,
  getDentistByIdController,
  deleteDentistByIdController,
} = require("../controllers/dentistControllers");
const {
  dentistAppointmentsController,
} = require("../controllers/appointmentControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.put(
  "/updateDentistProfile/:dentistId",
  authMiddleware,
  updateDentistProfileController
);
router.get(
  "/getDentistById/:dentistId",
  authMiddleware,
  getDentistByIdController
);
router.delete(
  "/deleteDentistById/:dentistId",
  authMiddleware,
  deleteDentistByIdController
);

router.get("/getAllDentists", authMiddleware, getAllDentistsController);
router.get(
  "/dentistAppointments",
  authMiddleware,
  dentistAppointmentsController
);

module.exports = router;
