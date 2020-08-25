const clientId = 'fbd5ba45-3fbe-4b66-af78-2b3b5b'
const pass = 'LowStretch1005'

const MySportsFeed = {
  feed() {
    return fetch(`https://api.mysportsfeeds.com/v1.0/pull/nhl/2018-2019-regular/overall_team_standings.json`, {
      headers: {
        'Authorization': 'Basic ' + btoa(clientId) + `:${pass}`
      }
    })
      .then(response => {
        if (response.ok) {
          console.log('API request success')
        } else {
          console.log('API request failed')
        }
      })
  }
}

export default MySportsFeed