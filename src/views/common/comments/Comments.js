import React from 'react';
import CommentEditor from './Comments-Editor';
import Threads from './Comments-Thread';
import './Comments.scss';

export default class Comments extends React.Component {
  static propTypes = {
    comments: React.PropTypes.array,
    onSubmit: React.PropTypes.func,
    user: React.PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
      showEditor: false
    };
  }

  submitHandler (body, parent) {
    const newComment = {
      user: {
        ...this.props.user
      },
      meta: {
        created: new Date() * 1
      },
      body: body,
      id: 'temp_id_' + Date() * 1
    };

    const newComments = this.props.comments.slice(0);

    if (!parent) {
      newComments.push( newComment );
    } else {
      newComment.meta.parent = {
        id: parent.id,
        user: {
          name: parent.user.name
        }
      };

      newComments.map( comment => {
        if (comment.id === parent.id) {
          if ( comment.replies ) {
            comment.replies.push(newComment);
          } else {
            comment.replies = [];
            comment.replies.push(newComment);
          }
        } else if ( comment.replies ) {
          comment.replies.map( reply => {
            if (reply.id === parent.id ) {
              comment.replies.push(newComment);
            }
          });
        }
      });
    }
    this.props.onSubmit(newComments);
  }

  clickHandler () {
    this.setState({ showEditor: !this.state.showEditor });
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <h3>Comments</h3>
          <button
            className="btn btn-default"
            onClick={ ::this.clickHandler }
          >
            New
          </button>
          <CommentEditor
            className="well"
            show={ this.state.showEditor }
            onSubmit={ ::this.submitHandler }
          />
        </div>
        <Threads
          comments={ this.props.comments }
          onSubmit={ ::this.submitHandler }
        />
      </div>
    );
  }

}
