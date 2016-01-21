import React from 'react';
import moment from 'moment';

export default class Meta extends React.Component {
  static propTypes = {
    parent: React.PropTypes.object,
    created: React.PropTypes.number,
    id: React.PropTypes.string
  }

  render () {
    return (
      <div className="comment-reply-meta">
        <a name={ this.props.id } />
        { this.props.parent &&
          <a href={ '#' + this.props.parent.id }>
            <span>{ 'In reply to ' + this.props.parent.user.name }</span>
          </a>
        }
        <span>{ 'Posted ' + moment( this.props.created ).fromNow() }</span>
      </div>
    );
  }
}
