const userModel = require("../models/userModel");
const appointmentModel = require("../models/appointmentModel");
const moment = require("moment");

const bookAppointmnetController = async (req, res) => {
  try {
    req.body.date = moment(req.body.date, "DD-MM-YYYY").toISOString();
    req.body.time = moment(req.body.time, "HH:mm").toISOString();
    const newAppointment = new appointmentModel(req.body);
    await newAppointment.save();
    const user = await userModel.findOne({ _id: req.body.dentistId });
    user.notification.push({
      type: "New-appointment-request",
      message: `A new Appointment Request from ${req.body.userInfo.name}`,
      onCLickPath: "/user/appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Book succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Booking Appointment",
    });
  }
};
const checkAvailabilityController = async (req, res) => {
  try {
    const date = moment(req.body.date, "DD-MM-YY").toISOString();
    const fromTime = moment(req.body.time, "HH:mm")
      .subtract(1, "hours")
      .toISOString();
    const toTime = moment(req.body.time, "HH:mm").add(1, "hours").toISOString();
    const dentistId = req.body.dentistId;
    const appointments = await appointmentModel.find({
      dentistId,
      date,
      time: {
        $gte: fromTime,
        $lte: toTime,
      },
    });
    if (appointments.length > 0) {
      return res.status(200).send({
        message: "Appointments not availibale at this time",
        success: true,
      });
    } else {
      return res.status(200).send({
        success: true,
        message: "Appointments available",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Booking",
    });
  }
};
const userAppointmentsController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({
      userId: req.user._id,
    });
    res.status(200).send({
      success: true,
      message: "Users Appointments Fetch SUccessfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In User Appointments",
    });
  }
};

const dentistAppointmentsController = async (req, res) => {
  try {
    const dentist = await dentistModel.findOne({ userId: req.user._id });
    const appointments = await appointmentModel.find({
      dentistId: dentist._id,
    });
    res.status(200).send({
      success: true,
      message: "Dentist Appointments fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Doc Appointments",
    });
  }
};

const getAppointmentByIdController = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const appointment = await appointmentModel.findOne({
        _id: req.params.appointmentId,
      });

      if (!appointment) {
        return res
          .status(200)
          .send({ message: "appointment not found", success: false });
      } else {
        res.status(200).send({
          success: true,
          data: { name: appointment.date, email: appointment.time },
        });
      }
    } else {
      const appointment = await appointmentModel.findOne({
        _id: req.params.appointmentId,
        userId: req.user._id,
      });

      if (!appointment) {
        return res
          .status(200)
          .send({ message: "appointment not found", success: false });
      } else {
        res.status(200).send({
          success: true,
          data: { name: appointment.date, email: appointment.time },
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "auth error", success: false, error });
  }
};

const getAllAppointmentsController = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const appointments = await appointmentModel.find({});
      res.status(200).send({
        success: true,
        message: "Appointments list",
        data: appointments,
      });
    } else {
      const appointments = await appointmentModel.find({
        userId: req.user._id,
      });
      res.status(200).send({
        success: true,
        message: "Appointments list",
        data: appointments,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting dentists data",
      error,
    });
  }
};
const updateAppointmentController = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const appointment = await appointmentModel.findOneAndUpdate(
        { _id: req.params.appointmentId },
        req.body
      );
      res.status(201).send({
        success: true,
        message: "appointment Updated",
        data: appointment,
      });
    } else {
      const appointment = await appointmentModel.findOneAndUpdate(
        { _id: req.params.appointmentId, userId: req.user._id },
        req.body
      );
      res.status(201).send({
        success: true,
        message: "appointment Updated",
        data: appointment,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting dentists data",
      error,
    });
  }
};
const deleteAppointmentByIdController = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const appointment = await appointmentModel.findByIdAndDelete({
        _id: req.params.appointmentId,
      });
      res.status(201).send({
        success: true,
        message: "appointment deleted",
        data: appointment,
      });
    } else {
      const appointment = await appointmentModel.findOneAndUpdate({
        _id: req.params.appointmentId,
        userId: req.user._id,
      });
      res.status(201).send({
        success: true,
        message: "appointment deleted",
        data: appointment,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting dentists data",
      error,
    });
  }
};
module.exports = {
  bookAppointmnetController,
  checkAvailabilityController,
  userAppointmentsController,
  dentistAppointmentsController,
  getAllAppointmentsController,
  getAppointmentByIdController,
  updateAppointmentController,
  deleteAppointmentByIdController,
};
