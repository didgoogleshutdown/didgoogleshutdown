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
    className: React.PropTypes.string
  }

  constructor (props) {
    super(props);
    this.state = {
      showEditor: false
    };
  }

  clickHandler () {
    this.setState({ showEditor: !this.state.showEditor });
  }

  render () {
    return (
      <div className={ 'comments-body ' + this.props.className }>
        <div className={ 'comment-bubble ' + ( this.props.pullRight ? 'pull-right' : '' ) }>
          { mdast().use(reactRenderer).process( this.props.body ) }
          <div
            className={ 'reply-button ' + (!this.state.showEditor ? 'highlight' : '') }
            onClick={ ::this.clickHandler }
          >
            { !this.state.showEditor ? 'Reply' : 'Cancel' }
          </div>
          <CommentEditor
            show={ this.state.showEditor }
            parent={ this.props.parent }
            onSubmit={ this.props.onSubmit }
          />
        </div>
      </div>
    );
  }
}
