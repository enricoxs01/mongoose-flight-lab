const Flights = require('../models/flights');

module.exports = {
  index,
  new: newFlight,
  create
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
      console.log(req.body.departs)
      if (dateTime === '') {
        let defaultDate = new Date();
        defaultDate = defaultDate.setMonth(defaultDate.getMonth()+8)
        console.log(defaultDate)
        req.body.departs = defaultDate.toString();
        console.log(req.body.departs.toString())
      }
      await Flights.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }