import React from 'react';
import Inline from './inline-edit';
import Select from 'react-select';
import './select.scss';

export default class ReactInlineEdit extends Inline {

  static propTypes = {
    text: React.PropTypes.string,
    fieldType: React.PropTypes.string,
    options: React.PropTypes.array,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onClick: React.PropTypes.func,
    className: React.PropTypes.string,
    editable: React.PropTypes.bool,
    key: React.PropTypes.number,
    tags: React.PropTypes.array,
    multi: React.PropTypes.bool
  }

  render () {
    if ( !this.props.editable ) {
      return (

        <span onClick={ this.props.onClick }>
          { this.props.tags &&
            this.props.tags.map( ( tag, index ) => (
              <span className={ this.props.className } key={ index }>
                { tag }
              </span>
            ))
          }
          <span className={ this.props.className }>
            { !this.props.tags ? this.props.text : '' }
          </span>
        </span>

      );
    } else {
      return (
        <div>
          { this.props.fieldType === 'dropdown' &&

            <select
              onChange={ ::this.handleChange }
              onBlur={ ::this.submitHandler }
            >
              { this.props.options.map( (option, index) => (
                <option key={ index }>{ option }</option>
              ))}
            </select>

          }

          { this.props.fieldType === 'tags' &&

            <Select
              name={ 'react-select-form-' + this.props.key }
              onBlur={ this.props.onBlur }
              delimiter=","
              options={ this.props.options }
              value={ this.props.tags ? this.props.tags.join( ',' ) : '' }
              onChange={ this.props.onChange }
              multi={ this.props.multi === false ? false : true }
              allowCreate
            />

          }

        </div>
      );
    }
  }
}
