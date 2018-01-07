import React from 'react';
import CommentEditor from './Comments-Editor';
import Threads from './Comments-Thread';
import './Comments.scss';

export default class Comments extends React.Component {
  static propTypes = {
    comments: React.PropTypes.array,
    onReply: React.PropTypes.func,
    onNewThread: React.PropTypes.func,
    user: React.PropTypes.object,
    params: React.PropTypes.object,
    className: React.PropTypes.string
  }

  constructor (props) {
    super(props);
    this.state = {
      showEditor: false
    };
  }

  newThreadHandler (data) {
    this.setState({ showEditor: false })
    this.submitHandler(data)
  }

  submitHandler (data) {
    if (!data.parent) {
      this.props.onNewThread({
        body: data.body,
        title: data.title || data.body.slice(0, 20)
      })
    } else {
      this.props.onReply(data)
    }
    this.setState({ showEditor: false });
  }

  clickHandler () {
    this.setState({ showEditor: !this.state.showEditor });
  }

  render () {
    return (
      <div className={ this.props.className || 'container-fluid' }>
        <div className="row">
          <h3>Comments</h3>

        { this.props.user &&
            <button
              className="btn btn-default new-thread"
              onClick={ ::this.clickHandler }
            >
              New
            </button>
          }

          { !this.props.user &&
            <span>Sign in or register to discuss.</span>
          }

          <CommentEditor
            className="well"
            show={ this.state.showEditor }
            onSubmit={ ::this.newThreadHandler }
          />
        </div>
        <Threads
          user={ this.props.user }
          comments={ this.props.comments }
          onSubmit={ ::this.submitHandler }
        />
      </div>
    );
  }

}
