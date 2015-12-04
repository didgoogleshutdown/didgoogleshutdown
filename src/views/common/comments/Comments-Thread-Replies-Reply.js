import React from 'react';
import Body from './Comments-Body';
import UserMeta from './Comments-Thread-Comment-UserMeta';
import Meta from './Comments-Thread-Comment-Meta';

export default class Reply extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    body: React.PropTypes.string,
    parent: React.PropTypes.object,
    id: React.PropTypes.string,
    meta: React.PropTypes.object,
    onSubmit: React.PropTypes.func
  }

  render () {
    return (
      <div className="comment reply row">
        <Meta
          parent={ this.props.parent }
          meta={ this.props.meta }
          id={ this.props.id }
        />
        <UserMeta
          className="col-xs-1 pull-right"
          user={ this.props.user }
        />
        <Body
          className="col-xs-11 pull-right"
          pullRight
          parent={ { id: this.props.id, user: this.props.user } }
          body={ this.props.body }
          id={ this.props.id }
          onSubmit={ this.props.onSubmit }
        />
      </div>
    );
  }
}
