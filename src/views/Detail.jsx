import React from 'react'
import Progress from 'react-progress-label'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getDetails } from 'actions/Actions'

import './Details.scss'

const mapStateToProps = state => ({
  details: state.detailPage.details
})

class Detail extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    details: React.PropTypes.object,
    params: React.PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
      error: false
    }
  }

  componentDidMount () {
    this.props.dispatch( getDetails( this.props.params.app ) )
    .catch( ()=> {
      this.setState({ error: true })
    })
  }

  render () {
    const statusMessages = ['Alive', 'Shutting down', 'Dead']
    const outlookMessages = ['Fine', 'Sketchy', 'Walking dead']
    const colors = ['#56AA54', '#F7BC33', '#E84235' ]

    return (
      <div className="detail">
        <div className="clossadfase">
          <Link to="/">{ '<' + ' Close' }</Link>
        </div>

        <div className="title">
          <h1>{ this.props.details.name }</h1>
        </div>

        <div className="vitals">
          <div className="status">
            <Progress
              progress={ (1 / this.props.details.status) * 100 }
              startDegree={60}
              progressWidth={8}
              trackWidth={20}
              cornersWidth={4}
              size={150}
              fillColor="white"
              trackColor="transparent"
              progressColor={ colors[ this.props.details.status - 1 ] }
            >
              <text x="75" y="75" style={{'textAnchor': 'middle'}}>
                { statusMessages[ this.props.details.status - 1 ] }
              </text>
            </Progress>
          </div>

          { this.props.details.status !== 3 &&
            <div className="outlook">
              <Progress
                progress={ (1 / this.props.details.outlook) * 100 }
                startDegree={60}
                progressWidth={8}
                trackWidth={20}
                cornersWidth={4}
                size={150}
                fillColor="white"
                trackColor="transparent"
                progressColor={ colors[ this.props.details.outlook - 1 ] }
              >
              <text x="75" y="75" style={{'textAnchor': 'middle'}}>
                { outlookMessages[ this.props.details.outlook - 1 ] }
              </text>
              </Progress>
            </div>
          }
        </div>

        <p className="description">{ this.props.details.description }</p>

        { this.state.error &&
          <div>
            <h1>Error</h1>
            <h3>Sorry, couldn't find an app with that exact name.</h3>
            <br />
            <p>If you have "Google" in the title, try removing it. i.e. "Search" instead of "Google Search".</p>
          </div>
        }

      </div>
    )
  }
}

export default connect(mapStateToProps)(Detail)
