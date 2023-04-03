var express = require('express');
var router = express.Router();
var flightsCtrl = require ('../controllers/flights');
const flights = require('../models/flights');


// GET all /flights
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create)

module.exports = router;
