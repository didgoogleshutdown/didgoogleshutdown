import React from 'react';
import Comment from './Comments-Comment';

export default class Replies extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    replies: React.PropTypes.array,
    parent: React.PropTypes.object,
    onSubmit: React.PropTypes.func,
    thread: React.PropTypes.string
  }

  render () {
    return (
      <div>
        { this.props.replies.map( (comment, index) => {
          return (
            <Comment
              key={ index }
              user={ this.props.user }
              comment={ comment }
              parent={ this.props.parent }
              thread={ this.props.thread }
              onSubmit={ this.props.onSubmit }
              isReply
            />
          );
        })}
      </div>
    );
  }
}
