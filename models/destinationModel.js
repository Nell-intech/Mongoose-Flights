const mongoose = require('mongoose');

//Schema lets you create blueprints for the structure?
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    // expecting the "name" property to be a string. validation to make sure the data is legit
    airport: { type: String, required: true, enum: ['AUS', 'DAL','LAX', 'SAN','SEA']}, 
    arrival: { type: Date},
  },
);

const Destination = mongoose.model('Destination', destinationSchema);


//exporting the Destination model as a module
module.exports = Destination;