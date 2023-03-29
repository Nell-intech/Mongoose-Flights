// Load the flights model
// const { model } = require("mongoose");
const Flights = require("../models/flightModel");
const Destination = require("../models/destinationModel");

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
  try {
    // Use the capLog model to interact with the database
    // find will get all documents from the capLog collection
    const flights = await Flights.find();
    console.log(flights);

    // Looks in the views folder for "capLog/Index" and passes { capLog } data to the view (kind of like a server props object)
    res.render("flightView/Index", { flights });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
  try {
    const flights = await Flights.findById(req.params.id).populate('destinations');
    res.render("flightView/Show", { flights });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// GET /flightsViewsnew
module.exports.new = (req, res) => {
  // const newFlight = new Flight({
  //   departs: { default: Date.now, required: true },
  // })

  res.render("flightView/New");
};

// POST /flights
module.exports.create = async (req, res) => {
  console.log("POST /flights");

  try {
    // use the model to interact with db and create a new document in the capLog collection
    const result = await Flights.create(req.body);
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  res.redirect("/flights");
};

// DELETE /flight/:name
module.exports.delete = async(req, res) => {
  try {
    console.log("DELETE /flight/:id");
    await flight.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.createDestination = async (req,res) => {
  const destination = await Destination.create(req.body)
  await Flights.findByIdAndUpdate(req.params.id, {
    $push:{
      destinations: destination._id
    }
  })
  res.redirect(`/flights/${req.params.id}`)
}

module.exports.indexDestination = async (req,res) => {
  res.send('')
}

module.exports.clear = async (req, res) => {
  console.log("DELETE /flights/clear");
  try {
    await Flights.deleteMany({});
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

//

module.exports.deleteDestination = async (req,res) => {
    await Destination.findByIdAndDelete(req.params.id)
    await Flights.findByIdAndUpdate(req.params.id, {
      $pull:{
        destinations: req.params.did
      }
    })
    res.redirect(`/flights/${req.params.id}`)
}

module.exports.updateDestination = async (req,res) => {
  await Destination.findByIdAndUpdate(req.params.did, req.body)
  res.redirect(`/flights/${req.params.id}`)
}

module.exports.showDestination = async (req,res) => {
  const destinations = await Destination.findById(req.params.did)
  res.render('destinationView/Edit', {destinationId: req.params.id, destinations})
}