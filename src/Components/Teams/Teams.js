import React, { Component } from 'react'
import template from './Teams.jsx'


class Teams extends Component {  
  constructor(props) {
    super(props)
    
    this.state = {
      loading: true,
      teamList: [],
    }
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
        setTimeout(() => {
          this.setState({
            teamList: data.teams,
            loading: false,
          })
        }, 2000)
      })
      .catch((err) => {
        console.log(err)
        this.wait()
      })
  }
  
  render() {
    return template.call(this)
  }
}

export default Teams
