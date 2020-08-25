import React from 'react'
import './App.css'
import Header from '../Header/index'
import Teams from '../Teams/index'

function template() {
  return(
    <div>
      <Header />
      <Teams
        teamList={this.state.teamList} />
    </div>
  )
}

export default template
