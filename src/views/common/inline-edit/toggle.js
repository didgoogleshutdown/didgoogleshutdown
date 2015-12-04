import React from 'react';
import Inline from './inline-edit';
import '../../../../node_modules/react-toggle/style.css';

export default class ReactInlineEdit extends Inline {

  static propTypes = {
    text: React.PropTypes.string,
    altText: React.PropTypes.string,
    onChange: React.PropTypes.func,
    className: React.PropTypes.string,
    editable: React.PropTypes.bool,
    defaultValue: React.PropTypes.oneOfType( [
      React.PropTypes.bool
    ]),
    editClass: React.PropTypes.string,
    activeClass: React.PropTypes.string
  }

  changeHandler () {
    this.props.onChange( !this.props.defaultValue );
  }

  render () {
    if ( !this.props.editable ) {
      return (
        <span className={ this.props.defaultValue ? this.props.className : this.props.activeClass }>
          { this.props.text }
        </span>
      );
    } else {
      return (
        <div className={ this.props.editClass }>
          <span
            className={ this.props.defaultValue ? this.props.className : this.props.activeClass }
            onClick={ ::this.changeHandler }
          >
            { this.props.text }
          </span>
        </div>
      );
    }
  }
}
