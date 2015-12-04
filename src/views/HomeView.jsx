import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import actions from 'actions/actions';
import Header from './Header';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

export default class HomeView extends React.Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}
