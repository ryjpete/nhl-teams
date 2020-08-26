import React from 'react'
import template from './Teams.jsx'

class Teams extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      teamList: [],
    }
  }

  componentDidMount() {
    console.log('Teams.js -- componentDidMount')

    fetch('https://statsapi.web.nhl.com/api/v1/teams')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log('API request failed')
        }
      })
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

export default Teams
