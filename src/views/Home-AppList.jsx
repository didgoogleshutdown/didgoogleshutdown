import React from 'react'
import App from './Home-AppList-App'

import './Home-AppList.scss';

export default class AppList extends React.Component {
  static propTypes = {
    apps: React.PropTypes.array
  }

  render () {
    return (
      <div className="home-applist">
        <h1>Popular apps</h1>

        <div className="app-row">
          { this.props.apps.map( app => {
            if ( app.popularity === 1 ) {
              return (

                <App
                  data={ app }
                />

              )
            }
          })}
        </div>

        <h1>Apps you maybe heard of</h1>

        <div className="app-row">
          { this.props.apps.map( app => {
            if ( app.popularity === 2 ) {
              return (

                <App
                  data={ app }
                />

              )
            }
          })}
        </div>

        <h1>Apps you've never heard of</h1>

        <div className="app-row">
          { this.props.apps.map( app => {
            if ( app.popularity === 3 ) {
              return (

                <App
                  data={ app }
                />

              )
            }
          })}
        </div>

      </div>
    )
  }
}
