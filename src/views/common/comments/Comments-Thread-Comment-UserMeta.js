import React from 'react';
import Modal from 'react-dumb-modal';
import UserEvents from './Comments-UserEvents'

export default class CommentsAvatar extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    poster: React.PropTypes.object,
    avatar: React.PropTypes.string,
    name: React.PropTypes.string,
    className: React.PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      showUserEvents: false
    }
  }

  userEventsModalHandler () {
    this.setState({ showUserEvents: !this.state.showUserEvents })
  }

  render () {
    const seriousAvatar = 'http://www.avatarpro.biz/avatar/' + this.props.poster._id + '?s=48'
    return (
      <div className={ 'comment-meta ' + this.props.className }>
        <div className="meta-content">
          <img src={ this.props.poster.avatar || seriousAvatar } className="img-circle" />
          <p>{ this.props.poster.name }</p>

          { this.props.user &&
            <span
              className="glyphicon glyphicon-flag"
              onClick={ ::this.userEventsModalHandler }
            />
          }
        </div>

        { this.state.showUserEvents &&
          <Modal
            dismiss={ ::this.userEventsModalHandler }
            modalClassName="modal modal-dialog"
            overlayClassName="modal-backdrop"
            overlayStyle={{}}
            modalStyle={{}}
          >
            <UserEvents
              user={ this.props.user }
              poster={ this.props.poster }
              dismiss={ ::this.userEventsModalHandler }
            />
          </Modal>
        }
      </div>
    );
  }
}
