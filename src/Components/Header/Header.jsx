import React from "react"
import "./Header.css"

function template() {
  return (
    <div className="header">
      <h1>
        <img
          src="https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg"
          alt="NHL"
          className="header_logo" />
        React Project
      </h1>
    </div>
  );
};

export default template
