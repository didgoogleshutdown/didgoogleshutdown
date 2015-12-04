import React from 'react';
import TextArea from 'react-textarea-autosize';

import './Comments-Editor.scss';

export default class CommentEditor extends React.Component {
  static propTypes = {
    body: React.PropTypes.string,
    id: React.PropTypes.string,
    onSubmit: React.PropTypes.func,
    show: React.PropTypes.bool,
    parent: React.PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
      body: this.props.body
    };
  }

  submitHandler () {
    this.props.onSubmit(this.state.body, this.props.parent);
  }

  changeHandler (event) {
    this.setState({ body: event.target.value });
  }

  render () {
    if ( this.props.show ) {
      return (
        <div className="comments-editor">
          <TextArea
            className="comment-field"
            onChange={ ::this.changeHandler }
          >
            { this.state.body }
          </TextArea>
          <div
            className="submit-button"
            onClick={ ::this.submitHandler }
          >
            Post
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}
