import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {
  return (
    <DefaultLayout>
      <div>
        <h1>Edit Destination</h1>
        <form action={`/flights/${props.destinationId}/destinations/${props.destinations._id}?_method=PUT`} method="POST">

        <label htmlFor="airport">Airport : </label>
          <br />
          <select name="airport" id="airport">
            <option defaultValue={props.destinations.airport}>{props.destinations.airport}</option>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
          <label htmlFor="arrival">Departs :</label>
          <br />
          <input type="datetime-local" id="arrival" name="arrival" defaultValue={props.destinations.arrival.toISOString().slice(0, 16)} />
          <br />
          <br />
          <button className="btn btn-outline-primary">Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Edit;