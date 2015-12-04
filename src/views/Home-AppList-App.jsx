import React from 'react'
import './Home-AppList-App.scss'

export default class App extends React.Component {
  static propTypes = {
    data: React.PropTypes.object
  }

  render () {
    let statusClass = 'alert alert-success'

    if ( this.props.data.status === 2 ) {
      statusClass = 'alert alert-warning'
    } else if ( this.props.data.status === 3 ) {
      statusClass = 'alert alert-danger'
    }

    let outlookClass = 'alert alert-success'

    if ( this.props.data.outlook === 2 ) {
      outlookClass = 'alert alert-warning'
    } else if ( this.props.data.outlook === 3 ) {
      outlookClass = 'alert alert-danger'
    }

    return (
      <div className="home-applist-app">
        <div className="app-title-container">
          <h3 className="app-title">
            { this.props.data.name }
          </h3>
        </div>

        <div className={ this.props.data.status.class || statusClass } >
          { this.props.data.status === 1 &&
            <span>Alive!</span>
          }
          { this.props.data.status === 2 &&
            <span>Dying!</span>
          }
          { this.props.data.status === 3 &&
            <span>Dead</span>
          }
          { this.props.data.status.text }
        </div>

        { this.props.data.status !== 3 &&
          <div className={ this.props.data.outlook.class || outlookClass } >
            { this.props.data.outlook === 1 &&
              <span>Fine</span>
            }
            { this.props.data.outlook === 2 &&
              <span>Sketchy</span>
            }
            { this.props.data.outlook === 3 &&
              <span>Days numbered</span>
            }
            { this.props.data.outlook.text }
          </div>
        }

        <p>{ this.props.data.description }</p>

      </div>
    )
  }
}
