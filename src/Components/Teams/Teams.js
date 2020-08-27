import React, { Component } from 'react'
import template from './Teams.jsx'


class Teams extends Component {  
  constructor(props) {
    super(props)
    
    this.state = {
      loading: true,
      sort: 'alpha',
      teamList: [],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  fetchTeams = () => {
    fetch('https://statsapi.web.nhl.com/api/v1/teams')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log('API request failed')
        }
      })
      .then((data) => {
        let sorted = data.teams.sort((a, b) => a.locationName > b.locationName ? 1 : -1)

        this.setState({
          teamList: sorted
        })
      })
      .then(() => {
        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 2000)
      })
      .catch((err) => {
        console.log(err)
        this.wait()
      })
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
  
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds)
  
    this.setState({
      loading: false,
    })
  }

  handleClick(e) {
    e.preventDefault()

    this.setState({
      sort: e.target.value
    })
    console.log(this.state.sort)
  }

  componentDidMount() {
    console.log('Teams.js -- componentDidMount')

    this.fetchTeams()
  }
  
  render() {
    return template.call(this)
  }
}

export default Teams
