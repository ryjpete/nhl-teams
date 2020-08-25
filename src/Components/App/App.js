import React from 'react'
import template from './App.jsx'

// const clientId = 'fbd5ba45-3fbe-4b66-af78-2b3b5b'
// const pass = 'LowStretch1005'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      teamList: [],
    }
  }

  componentDidMount() {
    console.log('App.js -- componentDidMount')

    fetch('https://statsapi.web.nhl.com/api/v1/teams')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          teamList: data.teams
        })
      })
      .catch(console.log)
  }
  
  render() {
    return template.call(this)
  }
}

export default App