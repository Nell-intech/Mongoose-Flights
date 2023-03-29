import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  // always passed through controller
  // console.log("THESE ARE MY PROPS "+props.flights.destinations[0])
  return (
    <DefaultLayout>
      <div className="center">
        <h1>Flight Details for {props.flights.airline} Airline</h1>
        <p>This is my paragraph is a space that will show all details for the clicked {props.flights.airline} Airline flight from the Index page</p>
        <div className="container">
          <h2>Airline : {props.flights.airline}</h2>
          <h2>Flight Number : {props.flights.flightNo}</h2>
          <h2>Departure : {props.flights.departs.toLocaleDateString()} , {props.flights.departs.toLocaleTimeString()}</h2>
          <h2>Airport : {props.flights.airport}</h2>
          {/* <h2>Going to : {props.flights.destinations}</h2> */}
        </div>

        <p>When viewing  this page, I should be able to add a destination for the clicked fllight. I also want to include its arrival date/time and one of the established airport codes</p>

        <p>This page should also display a list of the flight's destinations including airport and arrival</p>

        {props.flights.destinations.length ?
          <>
            <p>Destinations</p>
            {props.flights.destinations.map((item, index) =>
              <div className="container" key={index}>
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
            )}
          </>
          :
          <>
            <p>Destination is to be determined....</p>
          </>
        }
        <form action={`/flights/${props.flights._id}/destinations`} method="POST">
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




      </div>
    </DefaultLayout>
  );
}

export default Show;

