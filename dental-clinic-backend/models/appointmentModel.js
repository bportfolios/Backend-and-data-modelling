const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    dentistId: {
      type: String,
      required: true,
    },
    dentistInfo: {
      type: String,
      required: true,
    },
    userInfo: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports = appointmentModel;
