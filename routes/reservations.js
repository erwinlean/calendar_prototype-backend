"use strict";

var express = require('express');
var router = express.Router();
const reservationHandler = require("../handler/reservationsHandler");

router.post('/', reservationHandler.postReservation);
router.get('/', reservationHandler.getAllReservations);
router.get('/getUser', reservationHandler.getReservation);
router.delete('/deleteUser/:name', reservationHandler.deleteUserRes);


module.exports = router;