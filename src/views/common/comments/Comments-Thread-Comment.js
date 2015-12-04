import React from 'react';
import Body from './Comments-Body';
import UserMeta from './Comments-Thread-Comment-UserMeta';
import Meta from './Comments-Thread-Comment-Meta';

export default class Comment extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    meta: React.PropTypes.object,
    body: React.PropTypes.string,
    replies: React.PropTypes.array,
    parent: React.PropTypes.object,
    id: React.PropTypes.string,
    onSubmit: React.PropTypes.func
  }

  render () {
    return (
      <div className="comment row">
          <Meta
            parent={ this.props.parent }
            meta={ this.props.meta }
            id={ this.props.id }
          />
          <UserMeta
            className="col-xs-1"
            user={ this.props.user }
          />
          <Body
            className="col-xs-11"
            pullRight={ false }
            parent={ this.props }
            body={ this.props.body }
            id={ this.props.id }
            onSubmit={ this.props.onSubmit }
          />
      </div>
    );
  }
}
