const Reservation = require("../models/reservationModel");

exports.userController = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, time, date } = req.body;
    if (!firstName || !lastName || !phone || !email || !time || !date) {
      return res.status(400).send({
        message: "Please provide all details",
        success: false,
      });
    }

    const newReservation = new Reservation({
      firstName,
      lastName,
      phone,
      email,
      time,
      date,
    });

    await newReservation.save();

    res.status(200).send({
      message: "Thank you",
      success: true,
      newReservation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Error while saving reservation",
      success: false,
      error: error.message,
    });
  }
};
