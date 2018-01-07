import React from 'react';
import Progress from 'react-progress-label'

import { apps } from '../api/api'

import './Home-Vitals.css'

export default class Vitals extends React.Component {
  render () {
    const alive = apps.filter( app => {
      if ( app.status === 1 && app.outlook === 1) {
        return app
      }
    }).length

    const dying = apps.filter( app => {
      if ( app.status === 2 || app.outlook === 2 ) {
        return app
      }
    }).length

    const dead = apps.filter( app => {
      if ( app.status === 3 ) {
        return app
      }
    }).length

    const total = apps.length

    return (
      <div>
        <h2>Google's vital signs</h2>
        <div className="home-vitals">
        {[0,1,2].map(cat => (
          <Progress
            key={cat}
            progress={ [(alive / total) * 100, (dying / total) * 100, (dead / total) * 100][cat] }
            startDegree={60}
            progressWidth={8}
            trackWidth={20}
            cornersWidth={4}
            size={150}
            fillColor="transparent"
            trackColor="transparent"
            progressColor={["#56AA54", "#F7BC33", "#E84235"][cat]}
          >
            <text
              x="75"
              y="75"
              style={{'textAnchor': 'middle', fontWeight: 700}}
            >
              { [alive, dying, dead][cat] + [' live apps', ' uncertain', ' dead apps'][cat]}
            </text>
          </Progress>
        ))}
        </div>
      </div>
    )
  }
}
