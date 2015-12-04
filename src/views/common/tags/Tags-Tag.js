import React from 'react';

import './Tags-Tag.scss';

export default class Tag extends React.Component {
  static propTypes = {
    tag: React.PropTypes.object,
    onAdd: React.PropTypes.func
  }

  constructor (props) {
    super(props);
    this.state = {
      wasClicked: false
    };
  }

  clickHandler () {
    if ( !this.state.wasClicked ) {
      this.setState({ wasClicked: true });
      this.props.onAdd(this.props.tag);
    }
  }

  render () {
    return (
      <span
        className="label label-default tags-tag"
        onClick={ ::this.clickHandler }
      >
        <span className="tag-name">
          { ' + ' + this.props.tag.name }
        </span>

        <span className="tag-points">
          { ' (x' + this.props.tag.points + ')' }
        </span>
      </span>
    );
  }
}
