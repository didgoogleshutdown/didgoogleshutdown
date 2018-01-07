import React from 'react'
import Progress from 'react-progress-label'
import Link from 'gatsby-link'
import remark from 'remark'
import html from 'remark-react'

import './Detail.css'

export default class Detail extends React.Component {
  static propTypes = {
    details: React.PropTypes.object,
    dismiss: React.PropTypes.func
  }

  static defaultProps = {
    details: {}
  }

  constructor (props) {
    super(props);
  }

  render () {
    const { name, description, status } = this.props.details
    const statusMessages = ['Alive', 'Shutting down', 'Dead']
    const outlookMessages = ['Fine', 'Sketchy', 'Walking dead']
    const colors = ['#56AA54', '#F7BC33', '#E84235' ]

    const progProps = {
      startDegree: 60,
      progressWidth: 8,
      trackWidth: 20,
      cornersWidth: 4,
      size: 150
    }

    if (!name && !description) {
      return (
        <div>
          <h1>Error</h1>
          <h3>Sorry, couldn't find an app with that exact name.</h3>
          <br />
          <p>If you have "Google" in the title, try removing it. i.e. "Search" instead of "Google Search".</p>
        </div>
      )
    }

    return (
      <div className="detail">
        <div className="clossadfase">
          <Link to="/" onClick={() => this.props.dismiss()}>
            { '<' + ' Close' }
          </Link>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h1>{ this.props.details.name }</h1>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <div className="status">
            <Progress
              progress={ (1 / this.props.details.status) * 100 }
              {...progProps}
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
                {...progProps}
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

        <p className="description">
          { remark()
            .use(html)
            .processSync(this.props.details.description)
            .contents
          }
        </p>
      </div>
    )
  }
}
