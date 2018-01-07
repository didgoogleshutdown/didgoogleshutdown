import React from 'react';
import CommentEditor from './Comments-Editor';
import mdast from 'mdast';
import reactRenderer from 'mdast-react';

import './Comments-Body.scss';

export default class CommentsBody extends React.Component {
  static propTypes = {
    parent: React.PropTypes.object,
    pullRight: React.PropTypes.bool,
    body: React.PropTypes.string,
    id: React.PropTypes.string,
    created: React.PropTypes.number,
    onNewReply: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onClickReply: React.PropTypes.func,
    className: React.PropTypes.string,
    thread: React.PropTypes.string,
    showEditor: React.PropTypes.bool,
    user: React.PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
      showEditor: false
    };
  }

  render () {
    return (
      <div className={ 'comments-body ' + this.props.className }>
        <div className={ 'comment-bubble ' + ( this.props.pullRight ? 'pull-right' : '' ) }>
          { mdast().use(reactRenderer).process( this.props.body ) }
          <div
            className={ 'reply-button ' + (!this.state.showEditor ? 'highlight' : '') }
            onClick={ this.props.onClickReply }
          >
          { this.props.user &&
            <span>{ !this.props.showEditor ? 'Reply' : 'Cancel' }</span>
          }
          </div>
          <CommentEditor
            thread={ this.props.thread }
            show={ this.props.showEditor }
            parent={ this.props.parent }
            onSubmit={ this.props.onSubmit }
            onToggleReply={ this.props.onClickReply }
          />
        </div>
      </div>
    );
  }
}
