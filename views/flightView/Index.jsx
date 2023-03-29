import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

// AAU, I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time

function Index(props) {
  // can't use hooks or state
  // can't use event listeners in the same way
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let today = `${month}/${day}/${year}`
  return (
    <DefaultLayout>

      <div className="main">
        <h1>Welcome to Augustus Airlines</h1>

        {/* buttons */}
        <div className="btn-ctn">
          <a href="/flights/new">
            <button type="button"> Add a new flight</button>
          </a>
          <form action="/flights/clear?_method=DELETE" method="POST">
            <button>Clear all  flights</button>
          </form>
        </div>


        <ul
          className="main2"
          style={{ listStyle: "none" }}
          >
            
          {props.flights.map((flight, index) => (
            <div key={index} className="flight-ctn">
              <a className="flights" href={`/flights/${flight._id}`}>
              <li >
                  <strong>Airline: {flight.airline}</strong>
                  <div></div>
                  <strong>Flight No.: {flight.flightNo}</strong>
                  <br /> 
                  {flight.departs < date && <strong style={{color: 'red'}}><strong> Departure Date: </strong>{`${flight.departs.toISOString().slice(0, 10)}`} </strong>}             
                  {flight.departs > date && <strong><strong>Departure Date:</strong> {`${flight.departs.toISOString().slice(0, 10)}`}</strong>}
                  <br />
                  <strong>Departure Time: {flight.departs.toLocaleTimeString()}</strong>
                  <br />    
                  <strong>Airport: {flight.airport}</strong>
                  <br />
              </li>
              </a>
            </div>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
}

export default Index;
