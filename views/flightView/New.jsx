import React from "react";
// import Details from 'react-details';
import DefaultLayout from "../layouts/DefaultLayout";

//AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it

function New() {

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let today = `${month}/${day}/${year}`

  
  console.log(today)
  return (
    <DefaultLayout>
      <div className="center">
        <h1>New Flight</h1>
        <form action="/flights" method="POST">
          <label htmlFor="airline">Airline :</label>
          <br />
          <select name="airline" id="airline">
            <option value="American">American</option>
            <option value="Southwest">Southwest</option>
            <option value="United">United</option>
          </select>

          <br />
          <br />

          <label htmlFor="flightNo">Flight No. :</label>
          <br />
          <input type="number" id="flightNo" name="flightNo" />
          <br />
          <br />

          <label htmlFor="departs">Departs :</label>
          <br />
          <input type="datetime-local" id="departs"
            name="departs" value={today}
            min="2023-01-07T00:00" max="2024-01-07T00:00" />
          <br />
          <br />

          <label htmlFor="airport">Airport :</label>
          <br />
          <select name="airport" id="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
          <br />
          <br />


          <button>Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default New;
