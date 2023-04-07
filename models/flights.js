const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// DESTINATION SCHEMA
const destinationSchema = new Schema ({
  airport: {  type: String,
              enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
  arrival: { type: Date }
},{timestamps: true});


//FLIGHT SCHEMA
const flightSchema = new Schema({
  airline: {type: String,
            enum: ['American','Southwest','United']},
  flightNo:{ type: Number, required: true, min: 10, max: 9999 },
  airport: {  type: String,
            enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
  departs: { type: Date },
  tickets: [{type: Schema.Types.ObjectId,
             ref: 'Ticket' 
             }],
  destinations: [destinationSchema]
},{timestamps: true});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);