import "./TeamRecord.css";
import React from "react";

function template() {
  console.log(this.state.teamWins)

  return (
    <div className="d-flex justify-content-center team-record">
      <div className="border border-dark p-3 box win">
        <div className="top">W</div>
        <div className="btm">{this.state.teamWins}</div>
      </div>
      <div className="border border-dark p-3 box losses">
        <div className="top">L</div>
        <div className="btm">{this.state.teamLosses}</div>
      </div>
      <div className="border border-dark p-3 box ot">
        <div className="top">O</div>
        <div className="btm">{this.state.teamOt}</div>
      </div>
    </div>
  );
};

export default template;
