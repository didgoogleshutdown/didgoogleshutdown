import React from 'react';
import Tag from './Tags-Tag';
import { InlineSelect } from '../inline-edit';

import './Tags.scss';

export default class Tags extends React.Component {
  static propTypes = {
    tags: React.PropTypes.array,
    onChange: React.PropTypes.func
  }

  constructor (props) {
    super(props);
    this.state = {
      showTagField: false
    };
  }

  toggleTagField () {
    this.setState({ showTagField: !this.state.showTagField });
  }

  addHandler (tag) {
    const newTags = this.props.tags.slice(0);
    newTags.map( newTag => {
      if ( newTag.name === tag.name ) {
        newTag.points++;
      }
    });
    this.props.onChange(newTags);
  }

  newTagHandler (tag) {
    const newTags = this.props.tags.slice(0);
    const tags = tag.split(',');
    tags.map( newTag => {
      // checks if the tag already exists in the tags list
      if ( newTags.map(e => (e.name)).indexOf(newTag) === -1 ) {
        newTags.push({ name: newTag, points: 1 });
      }
    });
    this.props.onChange(newTags);
  }

  render () {
    return (
      <div className="tags">
        <div className="tallied-tags">
          { this.props.tags.map( (tag, index) => {
            return (
              <Tag
                key={ index }
                tag={ tag }
                onAdd={ ::this.addHandler }
              />
            );
          })}
        </div>
        <InlineSelect
          editable={ this.state.showTagField }
          onClick={ ::this.toggleTagField }
          onChange={ ::this.newTagHandler }
          onBlur={ ::this.toggleTagField }
          className="label label-default"
          fieldType="tags"
          text="Add new tag"
          options={[
            { value: 'beginner', label: 'beginner' },
            { value: 'performance', label: 'performance' },
            { value: 'hack', label: 'hack' }
          ]}
        />
      </div>
    );
  }
}
