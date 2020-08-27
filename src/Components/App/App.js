import React, { Component } from 'react'
import template from './App.jsx'


class App extends Component {
  // constructor(props) {
  //   super(props)
    
  //   this.state = {
  //     loading: true,
  //     sort: 'alpha',
  //     teamList: [],
  //   }
  // }
  
  render() {
    return template.call(this)
  }
}

export default App