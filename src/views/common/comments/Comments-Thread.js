import React from 'react';
import Comment from './Comments-Thread-Comment';
import Replies from './Comments-Thread-Replies';

export default class FunctionDocumentationComment extends React.Component {

  static propTypes = {
    comments: React.PropTypes.array,
    onSubmit: React.PropTypes.func,
    onNewReply: React.PropTypes.func
  }

  render () {
    if ( this.props.comments ) {
      return (
        <div>
          { this.props.comments.map( (comment, index) => (
            <div key={ index } >
              <Comment
                { ...comment }
                onSubmit={ this.props.onSubmit }
              />

              { comment.replies &&
                <Replies
                  replies={ comment.replies }
                  parent={ comment }
                  onSubmit={ this.props.onSubmit }
                />
              }
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}
