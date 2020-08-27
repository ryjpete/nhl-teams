import React from 'react'
import './Teams.css'
import Loader from '../Loader/index'
import TeamRecord from '../TeamRecord/index'
// import TeamSort from '../TeamSort/index'

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

const TeamBlock = (props) => {
  const sorted = props.sort

  // if (sorted == 'wins') {
  //   return (
  //     <div>
  //       <h3 className='d-block'>{sorted}</h3>
  //       <div className='d-flex flex-row flex-wrap justify-content-start'>
  //         {/* Below sorts through the teamList array objects and alphabetizes them based on locationName */}
  //         {props.teams.sort((a, b) => b - a).map((team) => (
  //           <div key={team.id} className="border-dark card col-2 rounded-0 text-center team">
  //             <div className="card-body align-items-center">
  //               <TeamLogo
  //                 teamName={team.teamName}
  //                 location={team.locationName} />
  //               <h5 className="card-title m-auto">{team.locationName}</h5>
  //               <h4 className="text-uppercase">{team.teamName}</h4>
  //               <h6>{team.id}</h6>
  //               <TeamRecord
  //                 teamId={team.id} />
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }
  // else if (sorted == 'losses') {
  //   return (
  //     <div>
  //       <h3 className='d-block'>{sorted}</h3>
  //       <div className='d-flex flex-row flex-wrap justify-content-start'>
  //         {/* Below sorts through the teamList array objects and alphabetizes them based on locationName */}
  //         {props.teams.map((team) => (
  //           <div key={team.id} className="border-dark card col-2 rounded-0 text-center team">
  //             <div className="card-body align-items-center">
  //               <TeamLogo
  //                 teamName={team.teamName}
  //                 location={team.locationName} />
  //               {/* <h5 className="card-title m-auto">{team.locationName}</h5> */}
  //               {/* <h4 className="text-uppercase">{team.teamName}</h4> */}
  //               <h6>{team.id}</h6>
  //               <TeamRecord
  //                 teamId={team.id} />
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }
  // else if (sorted == 'ot') {
  //   return (
  //     <div>
  //       <h3 className='d-block'>{sorted}</h3>
  //       <div className='d-flex flex-row flex-wrap justify-content-start'>
  //         {/* Below sorts through the teamList array objects and alphabetizes them based on locationName */}
  //         {props.teams.map((team) => (
  //           <div key={team.id} className="border-dark card col-2 rounded-0 text-center team">
  //             <div className="card-body align-items-center">
  //               {/* <TeamLogo
  //                 teamName={team.teamName}
  //                 location={team.locationName} /> */}
  //               <h5 className="card-title m-auto">{team.locationName}</h5>
  //               <h4 className="text-uppercase">{team.teamName}</h4>
  //               <h6>{team.id}</h6>
  //               {/* <TeamRecord
  //                 teamId={team.id} /> */}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div>
      {/* <h3 className='d-block'>{sorted}</h3> */}
      <div className='d-flex flex-row flex-wrap justify-content-start'>
        {/* Below sorts through the teamList array objects and alphabetizes them based on locationName */}
        {props.teams.map((team) => (
            <div key={team.id} className="border-dark card col-2 rounded-0 text-center team">
              <div className="card-body align-items-center">
                <TeamLogo
                  teamName={team.teamName}
                  location={team.locationName} />
                <h5 className="card-title m-auto">{team.locationName}</h5>
                <h4 className="text-uppercase">{team.teamName}</h4>
                <h6>{team.id}</h6>
                <TeamRecord
                  teamId={team.id} />
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

function template() {
  if (this.state.loading) {
    return <Loader />
  } else {
    return (
      <div>
        {/* <TeamSort
          onClick={this.handleClick} /> */}

        <TeamBlock
          teams={this.state.teamList}
          sort={this.state.sort} />
      </div>
    )
  }
}

export default template
