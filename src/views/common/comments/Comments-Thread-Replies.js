import React from 'react';
import Reply from './Comments-Thread-Replies-Reply';

export default class Replies extends React.Component {
  static propTypes = {
    replies: React.PropTypes.array,
    parent: React.PropTypes.object,
    onSubmit: React.PropTypes.func
  }

  render () {
    return (
      <div>
        { this.props.replies.map( (reply, index) => {
          return (
            <Reply
              key={ index }
              id={ reply.id }
              user={ reply.user }
              body={ reply.body }
              parent={ this.props.parent }
              meta={ reply.meta }
              onSubmit={ this.props.onSubmit }
            />
          );
        })}
      </div>
    );
  }
}
