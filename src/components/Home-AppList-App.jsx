import React from 'react'
import Link from 'gatsby-link'

import './Home-AppList-App.css'

export default class App extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    onClick: React.PropTypes.func
  }

  render () {
    const { status } = this.props.data
    const { outlook } = this.props.data
    const statusClass = ['success', 'warning', 'dead']
    const outlookClass = ['success', 'warning', 'danger']

    return (
      <div
        className="home-applist-app"
      >
        <style>{`
          .home-applist-app {
            width: 33.3%;
          }

          @media only screen and (max-width : 737px) {
            .home-applist-app {
              width: 50%;
            }
          }

          @media only screen and (max-width : 667px) {
            .home-applist-app {
              width: 100%;
            }
          }
        `}</style>
        <div
         style={{
          height: 355,
          margin: 1,
          padding: '0 50px',
          background: '#ECECEC',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around'
         }}
        >
          <Link
            to={'/' + this.props.data.slug }
            onClick={this.props.update}
          >
            <h3
              style={{
                fontSize: 30,
                fontWeight: 400,
                color: 'black'
              }}
            >
              { this.props.data.name }
            </h3>
          </Link>

          <div
            style={{
              width: '100%'
            }}
          >
            <p className="row-label">Status</p>
            <div className={ this.props.data.status.class || statusClass[status - 1] + ' app-col'}>
              <div
                style={{
                  height: 60,
                  width: 60,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  background: ['#56AA54', '#F7BC33', 'black'][status - 1]
                }}
              >
                <span
                  style={{
                    fontSize: 40,
                    paddingTop: [5, 3, 3][status - 1]
                  }}
                >
                  {status === 1 && '❤️'}
                  {status === 2 && '🤢'}
                  {status === 3 && '💀'}
                </span>
              </div>
              <span className="text">
                {status === 1 && 'Alive'}
                {status === 2 && 'Dying'}
                {status === 3 && 'Dead'}
              </span>
            </div>
            { this.props.data.status.text }
          </div>

          { status !== 3 &&
            <div
              style={{
                width: '100%'
              }}
            >
              <p className="row-label">
                {'Outlook: '}
                <span>
                  {outlook == 1 && ' 👍 ' }
                  {outlook == 2 && ' 🔮 ' }
                  {outlook == 3 && ' 💩 ' }
                </span>
                <span className="text">
                  { outlook === 1 && 'Fine' }
                  { outlook === 2 && 'Sketchy' }
                  { outlook === 3 && 'Days numbered' }
                </span>
              </p>
            </div>
          }

          <Link
            to={ '/?' + this.props.data.slug }
            onClick={this.props.update}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 100,
              backgroundColor: '#FAFAFA',
              padding: '2.5px 15px',
              borderRadius: '15px'
            }}
          >
            <span>More info</span>
            <span style={{
              transform: 'rotate(-45deg)',
              fontSize: 25
            }}>
              ↔
            </span>
          </Link>
        </div>
      </div>
    )
  }
}
