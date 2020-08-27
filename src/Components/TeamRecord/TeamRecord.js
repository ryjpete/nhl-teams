import React, { Component } from "react"
import template from "./TeamRecord.jsx"

class TeamRecord extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamWins: '',
      teamLosses: '',
      teamOt: '',
    }
  }

  componentDidMount() {
    console.log('TeamRecord.js -- componentDidMount')
    
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${this.props.teamId}/stats`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log('API request failed')
        }
      })
      .then((data) => {
        this.setState({
          teamWins: data.stats[0].splits[0].stat.wins,
          teamLosses: data.stats[0].splits[0].stat.losses,
          teamOt: data.stats[0].splits[0].stat.ot,
        })
      })
      .catch(console.log)
  }

  render() {
    return template.call(this);
  }
}

export default TeamRecord
