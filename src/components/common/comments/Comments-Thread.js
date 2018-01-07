import React from 'react';
import Comment from './Comments-Comment';
import Replies from './Comments-Thread-Replies';

export default class Thread extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    comments: React.PropTypes.array,
    onSubmit: React.PropTypes.func
  }

  render () {
    if ( this.props.comments ) {
      return (
        <div>
          { this.props.comments.map( (comment, index) => (
            <div key={ index } >
              <Comment
                user={ this.props.user }
                comment={ comment }
                thread={ comment.slug }
                onSubmit={ this.props.onSubmit }
              />

              { comment.replies &&
                <Replies
                  user={ this.props.user }
                  replies={ comment.replies }
                  thread={ comment.slug }
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
