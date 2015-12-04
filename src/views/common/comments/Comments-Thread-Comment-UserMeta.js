import React from 'react';

export default class CommentsAvatar extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    avatar: React.PropTypes.string,
    name: React.PropTypes.string,
    className: React.PropTypes.string
  }

  render () {
    return (
      <div className={ 'comment-meta ' + this.props.className }>
        <div className="meta-content">
          <img src={ this.props.user.avatar } className="img-circle" />
          <p>{ this.props.user.name }</p>
        </div>
      </div>
    );
  }
}
