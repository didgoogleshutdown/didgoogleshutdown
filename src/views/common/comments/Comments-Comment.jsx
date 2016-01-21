import React from 'react';
import Body from './Comments-Body';
import UserMeta from './Comments-Thread-Comment-UserMeta';
import Meta from './Comments-Thread-Comment-Meta';

import './Comments-Comment.scss'

export default class Reply extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    comment: React.PropTypes.object,
    thread: React.PropTypes.string,
    onSubmit: React.PropTypes.func,
    isReply: React.PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      showEditor: false
    }
  }

  replyClickHandler () {
    this.setState({ showEditor: !this.state.showEditor });
  }

  render () {
    let className = (this.props.isReply ? 'comment reply row ' : 'comment row ')
    if (this.state.showEditor) {
      className += 'show-reply-editor'
    }

    return (
      <div className={ className }>
        <Meta
          parent={ this.props.comment.parent }
          created={ this.props.comment.created }
          id={ this.props.comment._id }
        />
        <UserMeta
          className={ "col-xs-2 " + ( this.props.isReply ? 'pull-right' : '' ) }
          poster={ this.props.comment.user }
          user={ this.props.user }
        />
        <Body
          className={ ( this.props.isReply ? 'col-xs-8 pull-right' : 'col-xs-10 ' ) }
          pullRight={ this.props.isReply }
          parent={ { id: this.props.comment._id, user: this.props.comment.user._id } }
          body={ this.props.comment.body }
          id={ this.props.comment._id }
          thread={ this.props.thread }
          onSubmit={ this.props.onSubmit }
          onClickReply={ ::this.replyClickHandler }
          showEditor={ this.state.showEditor }
          user={ this.props.user }
        />
      </div>
    );
  }
}
