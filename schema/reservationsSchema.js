"use strict";

const mongoose = require('mongoose');

const Reservation = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    celphone: { type: String, required: true },
    day: { type: String, required: true },
    hour: { type: Number, required: true },
});

Reservation.index({ day: 1, hour: 1 }, { unique: true });

module.exports = mongoose.model('Reservation', Reservation);