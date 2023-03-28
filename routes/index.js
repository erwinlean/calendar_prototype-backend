"use strict";

var express = require('express');
var router = express.Router();
const indexHandler = require("../handler/indexHandler");

router.get('/', indexHandler.index);
router.get('/bookings', indexHandler.getEverything);

module.exports = router;