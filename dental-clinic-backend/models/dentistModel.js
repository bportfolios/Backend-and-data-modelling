const mongoose = require("mongoose");

const dentistSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is require"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    feePerVisit: {
      type: Number,
      required: [true, "fee is required"],
    },
    availability: {
      type: Object,
      required: [true, "reservation times is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const dentistModel = mongoose.model("dentists", dentistSchema);
module.exports = dentistModel;
