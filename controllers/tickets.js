const Flights = require('../models/flights')
const Tickets = require('../models/tickets')

module.exports = {
    create,
    new: newTicket
}

async function newTicket(req, res) {
    const flight = await Flights.findById(req.params.id);
    res.render('tickets/new', { title: 'Add Ticket', flight});
  }

async function create(req, res) {

    req.body.flight = req.params.id

    try {
      await  Tickets.create(req.body);
    } catch (err) {
      console.log(err);
    }
    
    res.redirect(`/flights`);
  }