import React from 'react'
import './Teams.css'

const TeamLogo = (props) => {
  const teamLocation = props.location.replace(' ', '-').replace('.', '').replace('é', 'e')
  const teamName = props.teamName.replace(' ', '-')
  const teamLogo = require('./' + teamLocation.toLowerCase() + '-' + teamName.toLowerCase() + '.png')
  return (
    <div className='logo_container bg-white mt-0 mx-auto mb-3 p-4 rounded-circle'>
      <img
        src={teamLogo}
        alt={props.location} />
    </div>
  )
}

const Teams = ({ teamList }) => {
  return (
    <div className='d-flex flex-row flex-wrap justify-content-start'>
      {teamList.map((team) => (
        <div key={team.id} className="border-dark card col-2 rounded-0 text-center team">
          <div className="card-body align-items-center">
            <TeamLogo
              teamName={team.teamName}
              location={team.locationName} />
            <h5 className="card-title m-auto">{team.locationName}</h5>
            <h4 className="text-uppercase">{team.teamName}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Teams
