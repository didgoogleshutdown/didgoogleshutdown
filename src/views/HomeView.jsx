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
    children: React.PropTypes.element,
    user: React.PropTypes.object,
    onLogin: React.PropTypes.func,
    onRegister: React.PropTypes.func,
    onLogout: React.PropTypes.func
  }

  render () {
    return (
      <div>
        <Header
          onLogin={ this.props.onLogin }
          onRegister={ this.props.onRegister }
          onLogout={ this.props.onLogout }
          user={ this.props.user }
        />
          { React.cloneElement(this.props.children, {
            user: this.props.user
          })}
      </div>
    );
  }
}
