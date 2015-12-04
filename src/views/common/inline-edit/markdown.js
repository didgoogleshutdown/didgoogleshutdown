import React from 'react';
import Inline from './inline-edit';
import mdast from 'mdast';
import reactRenderer from 'mdast-react';
import Textarea from 'react-textarea-autosize';

export default class InlineMarkdown extends Inline {
  static propTypes = {
    text: React.PropTypes.string,
    onChange: React.PropTypes.func,
    editable: React.PropTypes.bool,
    className: React.PropTypes.string,
    editClass: React.PropTypes.string,
    autosize: React.PropTypes.bool
  }

  render () {
    if ( !this.props.editable ) {
      return (

        <span onClick={ ::this.toggleEditing } className={ this.props.className }>
          { mdast().use(reactRenderer).process( this.props.text ) }
        </span>

      );
    } else {
      return (
        <span>
          { this.props.autosize === false &&
            <textarea
              className={ this.props.className + ' ' + this.props.editClass }
              value={ this.props.text }
              onChange={ ::this.handleChange }
              onKeyUp={ ::this.keyPressHandler }
              onBlur={ ::this.submitHandler }
              rows="5"
            />
          }

          { this.props.autosize !== false &&
            <Textarea
              className={ this.props.className + ' ' + this.props.editClass }
              value={ this.props.text }
              onChange={ ::this.handleChange }
              onKeyUp={ ::this.keyPressHandler }
              onBlur={ ::this.submitHandler }
            />
          }
        </span>
      );
    }
  }
}
