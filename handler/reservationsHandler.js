"use strict";

const Reservation = require('../schema/reservationsSchema');

module.exports = {
    postReservation: async function(req, res ,next){
        try {
            const existingReservation = await Reservation.findOne({ day: req.body.day, hour: req.body.hour });
            if (existingReservation) {
                return res.status(400).json({ message: "This date & hour is already taken" });
            }

            const reservation = new Reservation({ 
                name: req.body.name, 
                email: req.body.email,  
                celphone: req.body.celphone,  
                day: req.body.day,  
                hour: req.body.hour 
            });
            await reservation.save();
            res.status(201).json(reservation);
        } catch (err) {
            res.status(400).json({ message: err.message });
        };
    },
    getReservation: async function(req, res, next){
        try {
            const reservations = await Reservation.find().select('name day hour');
            // find like:
            //http://localhost:3000/reservations/getSpecificReservations?name=pepe
            res.json(reservations);
        } catch (err) {
            res.status(500).json({ message: err.message });
        };
    },
    getAllReservations: async function(req, res, next) {
        try {
            const reservations = await Reservation.find();
            const groupedReservations = reservations.reduce((groupedReserv, reservation) => {
                const { name, day, hour } = reservation;
                if (!groupedReserv[name]) {
                    groupedReserv[name] = [];
                }
                groupedReserv[name].push({ day, hour });
                return groupedReserv;
            }, {});
            res.json(groupedReservations);
        } catch (err) {
            res.status(500).json({ message: err.message });
        };
    },
    deleteUserRes: async function(req, res, next) {
        try {
            //Delete for user/reservs like:
            //http://localhost:3000/reservations/deleteuser/pepe
            const reservation = await Reservation.findOneAndDelete("name");
            if (!reservation) {
                return res.status(404).json({ message: "Reservation not found" });
            }
            res.json({ message: "Reservation deleted" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};