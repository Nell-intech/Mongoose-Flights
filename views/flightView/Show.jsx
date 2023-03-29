import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  // always passed through controller
  // console.log("THESE ARE MY PROPS "+props.flights.destinations[0])
  return (
    <DefaultLayout>
      <div className="main center ">
        <h1>Flight Details for {props.flights.airline} Airline</h1>
        <div className="flight-ctn">
          <h2>Airline : {props.flights.airline}</h2>
          <h2>Flight Number : {props.flights.flightNo}</h2>
          <h2>Departure : {props.flights.departs.toLocaleDateString()} , {props.flights.departs.toLocaleTimeString()}</h2>
          <h2>Airport : {props.flights.airport}</h2>
        </div>

        <form className="container" action={`/flights/${props.flights._id}/destinations`} method="POST">
          <label htmlFor="airport">Add A Destination</label>
          <br />
          <select name="airport" id="airport">
            <option value="AUS">Austin</option>
            <option value="DAL">Dallas</option>
            <option value="SAN">San Antonio</option>
          </select>
          <input type="datetime-local" id="arrival"
            name="arrival" />
          <button>Submit</button>
        </form>

        {props.flights.destinations.length ?
          <>
            <p>Destinations</p>
            {props.flights.destinations.map((item, index) =>
              <div className="flight-ctn" key={index}>
                <div>
                <p>Airport: {item.airport}</p>
                <p>Arrival: {item.arrival.toLocaleTimeString()}</p>
                <p>Arrival: {item.arrival.toLocaleDateString()}</p>

                <form className="destination-Btn"  action={`/flights/${props.flights._id}/destinations/${item._id}`}>
                  <button>Edit Destination</button>
                </form>

                <form className="destination-Btn"  action={`/flights/${props.flights._id}/destinations/${item._id}?_method=DELETE`} method="POST">
                  <button>Delete Destination</button>
                </form>

                </div>
              </div>
            )}
          </>
          :
          <>
            <p className="white">Destination is to be determined....</p>
          </>
        }
       




      </div>
    </DefaultLayout>
  );
}

export default Show;

