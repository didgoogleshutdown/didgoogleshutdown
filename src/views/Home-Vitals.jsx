import React from 'react';
import Progress from 'react-progress-label'

import './Home-Vitals.scss'

export default class Vitals extends React.Component {
  static propTypes = {
    apps: React.PropTypes.array
  }

  render () {
    const alive = this.props.apps.filter( app => {
      if ( app.status === 1 && app.outlook === 1) {
        return app
      }
    }).length

    const dying = this.props.apps.filter( app => {
      if ( app.status === 2 || app.outlook === 2 ) {
        return app
      }
    }).length

    const dead = this.props.apps.filter( app => {
      if ( app.status === 3 ) {
        return app
      }
    }).length

    const total = this.props.apps.length

    return (
      <div className="container">
        <h2>Google's vital signs</h2>
        <div className="home-vitals">
          <Progress
            progress={ (alive / total) * 100 }
            startDegree={60}
            progressWidth={8}
            trackWidth={20}
            cornersWidth={4}
            size={150}
            fillColor="white"
            trackColor="transparent"
            progressColor="#56AA54"
          >
            <text x="75" y="75" style={{'textAnchor': 'middle'}}>
              { alive + ' live apps'}
            </text>
          </Progress>

          <Progress
            progress={ (dying / total) * 100 }
            startDegree={60}
            progressWidth={8}
            trackWidth={20}
            cornersWidth={4}
            size={150}
            fillColor="white"
            trackColor="transparent"
            progressColor="#F7BC33"
          >
            <text x="75" y="75" style={{'textAnchor': 'middle'}}>
              { dying + ' uncertain apps'}
            </text>
          </Progress>

          <Progress
            progress={ (dead / total) * 100 }
            startDegree={60}
            progressWidth={8}
            trackWidth={20}
            cornersWidth={4}
            size={150}
            fillColor="white"
            trackColor="transparent"
            progressColor="#E84235"
          >
            <text x="75" y="75" style={{'textAnchor': 'middle'}}>
              { dead + ' dead apps'}
            </text>
          </Progress>
        </div>
      </div>
    )
  }
}
