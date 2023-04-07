const Flights = require('../models/flights');
const Tickets = require('../models/tickets')

module.exports = {
  index,
  new: newFlight,
  create,
  show
};


async function index(req, res) {
    const flights = await Flights.find({});
    res.render('flights/index', { title: 'All Flights', flights });
  }


function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { title: 'Add flight', errorMsg: '' });
  }

async function create(req, res) {
    
    //commit the record of the new flight
    try {
      let dateTime = req.body.departs
      console.log(req.body)
      if (dateTime === '') {
        let defaultDate = new Date();
        defaultDate = defaultDate.setMonth(defaultDate.getMonth()+12)
        console.log(defaultDate)
        req.body.departs = defaultDate.toString();
        console.log(req.body.departs.toString())
      }
      await Flights.create(req.body);
     
      res.redirect('/flights');  
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }

  async function show(req, res) {
    const flight = await Flights.findById(req.params.id) 
    const tickets = await Tickets.find({flight: flight._id})
    res.render('flights/show', { title: 'Flight Detail', flight, tickets })
  }
  
  