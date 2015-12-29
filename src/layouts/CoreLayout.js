import React from 'react';
import { connect } from 'react-redux'
import { getUser, login, logout, postUser } from '../actions/Actions'

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'styles/core.scss';

const mapStateToProps = state => ({
  user: state.accounts.user
})

class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element,
    dispatch: React.PropTypes.func,
    user: React.PropTypes.object,
    history: React.PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    if (__CLIENT__ && window.mixpanel) {
      window.mixpanel.track('Visit')
    }
    if ( window.localStorage.token ) {
      this.props.dispatch( getUser() )
    }
  }

  loginHandler (credentials) {
    this.props.dispatch( login(credentials) )
    .then( () => {
      window.localStorage.token = this.props.user.token;
    });
  }

  registrationHandler (user) {
    this.props.dispatch( postUser(user) )
    .then( () => {
      window.localStorage.token = this.props.user.token;
    });
  }

  logoutHandler () {
    delete window.localStorage.token;
    this.props.dispatch( logout() );
  }

  render () {
    return (
      <div className='page-container'>
        <div className='view-container'>
          { React.cloneElement( this.props.children, {
            user: this.props.user,
            onLogin: ::this.loginHandler,
            onRegister: ::this.registrationHandler,
            onLogout: ::this.logoutHandler,
            history: this.props.history
          })}
        </div>
        <div className="container">
          <br/><br/><br/>
          © Secret Order of the 219
          <br/><br/><br/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CoreLayout)
