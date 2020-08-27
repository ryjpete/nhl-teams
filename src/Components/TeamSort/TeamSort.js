import React, { Component } from "react";
import template from "./TeamSort.jsx";

class TeamSort extends Component {  
  // constructor(props) {
  //   super(props)

  //   // this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick(e) {
  //   e.preventDefault()
  //   // alert(e.target.value)

  //   this.setState({
  //     sort: e.target.value
  //   })
  // }

  render() {
    return template.call(this);
  }
}

export default TeamSort;
