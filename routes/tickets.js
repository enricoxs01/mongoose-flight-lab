const express = require('express');
const router = express.Router();
// You Do - Require the yet to be created reviews controller 
const ticketsCtrl = require('../controllers/tickets')

//I am into Flights
router.get ('/:id/tickets/new', ticketsCtrl.new)
router.post('/:id/tickets', ticketsCtrl.create);


module.exports = router;