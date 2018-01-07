import React from 'react'
import Progress from 'react-progress-label'
import Link from 'gatsby-link'
import { connect } from 'react-redux'
import mdast from 'mdast';
import reactRenderer from 'mdast-react';

import { getDetails, postReply, getComments, postThread } from 'actions/Actions'
import Comments from './common/comments/Comments'

import './Detail.css'

const mapStateToProps = state => ({
  details: state.detailPage.details,
  comments: state.comments.comments
})

class Detail extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    details: React.PropTypes.object,
    params: React.PropTypes.object,
    user: React.PropTypes.object,
    comments: React.PropTypes.array
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
    this.props.dispatch( getComments(this.props.params.app) )
  }

  newThreadHandler (data) {
    this.props.dispatch( postThread(data, this.props.params.app) )
    .then( () => {
      this.props.dispatch( getComments(this.props.params.app))
    })
  }

  /* That data object is `thread`, `parent` and `body`. Parent is an object with post ID and user ID. Body is a string. Thread is a string, the slug of the thread it's in. */
  replyHandler (data) {
    this.props.dispatch( postReply(data))
    .then( () => {
      this.props.dispatch( getComments(this.props.params.app))
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

        <p className="description">
          { mdast().use(reactRenderer).process(this.props.details.description) }
        </p>

        <Comments
          className="container-fluid comments"
          comments={ this.props.comments }
          user={ this.props.user }
          onNewThread={ ::this.newThreadHandler }
          onReply={ ::this.replyHandler }
        />

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
