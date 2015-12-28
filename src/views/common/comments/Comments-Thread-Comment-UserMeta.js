import React from 'react';

export default class CommentsAvatar extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    avatar: React.PropTypes.string,
    name: React.PropTypes.string,
    className: React.PropTypes.string
  }

  render () {
    const seriousAvatar = 'http://www.avatarpro.biz/avatar/' + this.props.user._id + '?s=48'
    return (
      <div className={ 'comment-meta ' + this.props.className }>
        <div className="meta-content">
          <img src={ this.props.user.avatar || seriousAvatar } className="img-circle" />
          <p>{ this.props.user.name }</p>
        </div>
      </div>
    );
  }
}
