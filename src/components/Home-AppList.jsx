import React from 'react'
import App from './Home-AppList-App'

import { apps } from '../api/api'

import './Home-AppList.css';

export default class AppList extends React.Component {
  static propTypes = {
    apps: React.PropTypes.array
  }

  render () {
    return (
      <div>
        {[1, 2, 3].map(popularity => {
          return (
            <div>
              <h1>
                {['Popular apps', 'App you may have heard of', "Apps you've never heard of"][popularity - 1]}
              </h1>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap'
                }}
              >
                { apps.map( app => {
                  if ( app.popularity === popularity ) {
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
        })}
      </div>
    )
  }
}
