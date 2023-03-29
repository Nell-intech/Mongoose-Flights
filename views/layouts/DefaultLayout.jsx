import React from "react";

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        
       
        
        <div className="display">
        <nav>
          <a href="/flights">All Flights</a>
          <a href="/flights/new">New Flights</a>
        </nav>
          {/* // renders everything inside the wrapping component tags */}
          {props.children}
        </div>
      </body>
    </html>
  );
}

export default DefaultLayout;
