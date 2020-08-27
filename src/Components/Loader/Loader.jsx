import React from "react"
import "./Loader.css"

function template() {
  const spinner = require('./grid.svg')

  return (
    <div className="loader position-absolute">
      <img src={spinner} alt="loading" />
    </div>
  )
}

export default template
