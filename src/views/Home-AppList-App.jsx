import React from 'react'
import { Link } from 'react-router'
import './Home-AppList-App.scss'

export default class App extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    onClick: React.PropTypes.func
  }

  render () {
    const statusClass = ['success', 'warning', 'dead']
    const outlookClass = ['success', 'warning', 'alert-danger']

    return (
      <div className="home-applist-app">
        <Link to={ '/' + this.props.data.slug }>
          <div className="app-title-container">
            <h3 className="app-title">
              { this.props.data.name }
            </h3>
          </div>
        </Link>

        <p className="row-label">Status</p>
        { this.props.data.status === 1 &&
          <div className={ this.props.data.status.class || statusClass[0] + ' app-row' }>
            <span className="icon glyphicon glyphicon-ok"></span>
            <span className="text">Alive!</span>
          </div>
        }
        { this.props.data.status === 2 &&
          <div className={ this.props.data.status.class || statusClass[1] + ' app-row'}>
            <span className="icon glyphicon glyphicon-exclamation-sign"></span>
            <span className="text">Dying!</span>
          </div>
        }
        { this.props.data.status === 3 &&
          <div className={ this.props.data.status.class || statusClass[2] + ' app-col'}>
            <span className="icon">💀</span>
            <span className="text">Dead</span>
          </div>
        }
        { this.props.data.status.text }


        { this.props.data.status !== 3 &&
          <div>
            <p className="row-label">Outlook</p>
            { this.props.data.status === 1 &&
              <div className={ this.props.data.outlook.class || outlookClass[0] + ' app-row'}>
                <span className="icon glyphicon glyphicon-ok"></span>
                <span className="text">Fine</span>
              </div>
            }
            { this.props.data.status === 2 &&
              <div className={ this.props.data.outlook.class || outlookClass[1] + ' app-row'}>
                <span className="icon">🔮</span>
                <span className="text">Sketchy</span>
              </div>
            }
            { this.props.data.status === 3 &&
              <div className={ this.props.data.outlook.class || outlookClass[2] + ' app-row'}>
                <span className="icon glyphicon glyphicon-ban-circle "></span>
                <span className="text">Days numbered</span>
              </div>
            }
          </div>
        }

        <div className="info-link">
          <div>
            <Link to={ '/' + this.props.data.slug }>
              <span>{ 'More info   ' }</span>
              <span className="glyphicon  glyphicon-resize-full"></span>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}
