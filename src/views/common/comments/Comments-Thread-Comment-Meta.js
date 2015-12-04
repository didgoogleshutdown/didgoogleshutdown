import React from 'react';
import moment from 'moment';

export default class Meta extends React.Component {
  static propTypes = {
    parent: React.PropTypes.object,
    meta: React.PropTypes.object,
    id: React.PropTypes.string
  }

  render () {
    return (
      <div className="comment-reply-meta">
          <a name={ this.props.id } />
          { this.props.meta.parent &&
            <a href={ '#' + this.props.meta.parent.id }>
              <span>{ 'In reply to ' + this.props.meta.parent.user.name }</span>
            </a>
          }
          <span>{ 'Posted ' + moment( this.props.meta.created ).fromNow() }</span>
      </div>
    );
  }
}
