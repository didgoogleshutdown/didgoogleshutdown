import React from 'react';
import Inline from './inline-edit';
import Highlight from 'react-highlight';
import '../../../../node_modules/highlight.js/styles/color-brewer.css';
import Textarea from 'react-textarea-autosize';
import Input from 'react-input-autosize';

export default class ReactInlineEdit extends Inline {

  static propTypes = {
    text: React.PropTypes.string,
    rows: React.PropTypes.number,
    textType: React.PropTypes.string,
    fieldType: React.PropTypes.string,
    onChange: React.PropTypes.func,
    textClassName: React.PropTypes.string,
    editable: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    className: React.PropTypes.string,
    editClass: React.PropTypes.string
  }

  render () {
    if ( !this.props.editable ) {
      const ElementType = this.props.textType === 'code' ? Highlight : 'span';
      return (
        <span
          className={ this.props.className }
          onClick={ ::this.toggleEditing }
        >
          <ElementType className={ this.props.textClassName }>
            { this.props.text }
          </ElementType>
        </span>
      );
    } else {
      const commonProps = {
        onChange: ::this.handleChange,
        value: this.props.text,
        onBlur: ::this.submitHandler,
        className: this.props.className + ' ' + this.props.editClass
      };

      if ( this.props.fieldType === 'input' ) {
        return (

          <Input
            {...commonProps}
          />

        );
      } else if ( this.props.fieldType === 'textarea' ) {
        return (

          <Textarea
            rows={ this.props.rows }
            {...commonProps}
          />

        );
      }
    }
  }
}
