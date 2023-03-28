"use strict";

const Reservation = require('../schema/reservationsSchema');
const ejs = require('ejs');


module.exports = {
    index: async function (req, res, next){
        try {
            res.status(417).json({ message: "Error, bad path" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        };
    },
    getEverything: async function (req, res, next){
        
        try {
            const reservations = await Reservation.find();
            ejs.renderFile("./views/template.ejs", { reservations: reservations }, function(err, html){
                if(err){
                    res.status(500).json({ message: err.message });
                } else {
                    res.send(html);
                }
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
        
        /*
        try {
            const reservations = await Reservation.find();
            res.json(reservations);
        } catch (err) {
            res.status(500).json({ message: err.message });
        };*/
    }
};