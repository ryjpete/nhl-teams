import React from "react"
import "./TeamSort.css"

function template() {  
  return (
    <div className="bg-dark border border-dark d-flex justify-content-end p-3 team-sort">
      <p className="m-0">Sort:</p>
      <ul className="m-0 ml-2 p-0">
        <li><button onClick={this.props.onClick} value="alpha">Alphabetical</button></li>
        <li><button onClick={this.props.onClick} value="wins">Most Wins</button></li>
        <li><button onClick={this.props.onClick} value="losses">Most Losses</button></li>
        <li><button onClick={this.props.onClick} value="ot">Most OT Losses</button></li>
      </ul>
    </div>
  )
}

export default template
