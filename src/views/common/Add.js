import React from 'react';

export default class Add extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    addHandler: React.PropTypes.func,
    visible: React.PropTypes.bool
  }

  render () {
    if ( this.props.visible ) {
      return (
        <button className="add btn btn-sm btn-default" onClick={ this.props.addHandler }>
          <span className="glyphicon glyphicon-plus-sign"></span>
          { ' ' + this.props.text }
        </button>
      );
    } else {
      return null;
    }
  }
}
