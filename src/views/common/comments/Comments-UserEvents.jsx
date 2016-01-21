import React from 'react'
import { connect } from 'react-redux'
import TextArea from 'react-textarea-autosize'

import { postUserEvent } from 'actions/Actions'

const mapStateToProps = state => ({
  events: state.accounts
})

class UserEvents extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    events: React.PropTypes.object,
    user: React.PropTypes.object,
    poster: React.PropTypes.object,
    dismiss: React.PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      body: ''
    }
  }

  bodyChangeHandler (event) {
    this.setState({ body: event.target.value })
  }

  reportHandler (type) {
    const data = {
      user: this.props.poster,
      active: true,
      type: type,
      body: this.state.body
    }

    this.props.dispatch( postUserEvent(data) )
    .then( (body) => {
      this.props.dismiss()
    })
    .catch( error => {
      console.log('it did not work' + error)
    })
  }

  render () {
    return (
      <div className="user-events">
        <h1>Report</h1>
        <p>False reports will result in a ban.</p>
        <div className="form-group">
          <label>Reason:</label>
          <TextArea
            className="form-control"
            onChange={ ::this.bodyChangeHandler }
            value={ this.state.body }
          />
        </div>

        <div className="dialog-buttons">
          <button
            className="btn btn-default"
            onClick={ this.props.dismiss }
          >
            Cancel
          </button>

          <button
            className="btn btn-default"
            onClick={ this.reportHandler.bind(this, 'REPORT') }
          >
            Report
          </button>

          { this.props.user.role === 'admin' &&
            <button
              className="btn btn-default"
              onClick={ this.reportHandler.bind(this, 'BANIP') }
            >
              <span className="glyphicon glyphicon-lock" />
              {' Ban IP'}
            </button>
          }

          { this.props.user.role === 'admin' &&
            <button
              className="btn btn-default"
              onClick={ this.reportHandler.bind(this, 'PROBATEIP') }
            >
              <span className="glyphicon glyphicon-lock" />
              {' Probate IP'}
            </button>
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserEvents)
