import React from 'react';

export default class ReactInlineEdit extends React.Component {

  static propTypes = {
    editable: React.PropTypes.bool,
    onChange: React.PropTypes.func
  }

  constructor ( props ) {
    super( props );
    this.state = {
      editing: false
    };
  }

  toggleEditing ( event ) {
    if ( event ) {
      event.preventDefault();
    }
    this.props.editable && this.setState( { editing: !this.state.editing } );
  }

  toggleHandler ( event ) {
    this.props.onChange( event.target.checked );
  }

  submitHandler () {
    this.setState( { editing: false } );
  }

  handleChange (event) {
    this.props.onChange( event.target.value );
  }

  keyPressHandler (event) {
    if ( event.keyCode === 27 ) {
      event.preventDefault();
      ::this.toggleEditing();
    }
  }
}
