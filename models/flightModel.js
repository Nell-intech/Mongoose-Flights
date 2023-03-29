const mongoose = require('mongoose');

//Schema lets you create blueprints for the structure?
const Schema = mongoose.Schema;

// const destinationSchema = new Schema(
//   {
//     // expecting the "name" property to be a string. validation to make sure the data is legit
//     airport: { type: String, required: true, enum: ['AUS', 'DAL','LAX', 'SAN','SEA']}, 
//     arrival: { type: Date},
//   },
// );

// Instantiate a new schema object for fruit and structour our data
const flightSchema = new Schema({
    // expecting the "name" property to be a string. validation to make sure the data is legit
    airline: { type: String, required: true, enum: ['American', 'Southwest','United']}, 
    flightNo: { type: Number, required: 10 <= 9999 },
    departs: { type: Date, required: true, default: +1},
    airport: { type: String, required: true, enum: ['AUS', 'DAL','LAX', 'SAN','SEA','SAN']}, 
    destinations: [{type: mongoose.Types.ObjectId, ref: 'Destination'}]
  },
  { timestamps: true }      
  );


// Creating our model using our flightSchema and give our collection a name of "flight"
const Flight = mongoose.model('Flight', flightSchema);

// const Destination = mongoose.model('destination', destinationSchema);

// exporting the Flight model as a module
module.exports = Flight

// exporting the Destination model as a module
// module.exports = Destination;