import React from 'react';
import Link from 'gatsby-link';
// import Modal from 'react-dumb-modal'
import Login from './Login'

import './Header.css'
import './Header-Modal.css'

export default class Header extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    onLogin: React.PropTypes.func,
    onLogout: React.PropTypes.func,
    onRegister: React.PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      showLoginModal: false
    }
  }

  toggleLoginModal () {
    this.setState({ showLoginModal: !this.state.showLoginModal })
  }

  render () {
    const colors = [ '#4286F5', '#E84235', '#F7BC33', '#56AA54' ]
    const dgsd = ['D', 'G', 'S', 'D'].map( (letter, index) => (
      <span style={ { color: colors[index] }}>{ letter }</span>
    ))

    return (
      <div
        style={{
          height: 50,
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px'
        }}
      >
        <Link to='/' style={{ fontSize: 30 }}>
          { dgsd }?
        </Link>
        <div className="nav-links">
          <ul style={{ display: 'inline-flex', listStyle: 'none' }}>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* this.props.user &&
              <li
                className="logout-button"
                onClick={ this.props.onLogout }
              >
                { this.props.user.name } (logout)
              </li>
            */}
            {/* !this.props.user &&
              <li
                className="login-button"
                onClick={ ::this.toggleLoginModal }
              >
                Login
              </li>
            */}
          </ul>
        </div>
        {/* (this.state.showLoginModal && !this.props.user) &&
          <Modal
            dismiss={ ::this.toggleLoginModal }
            overlayClassName="modal-backdrop"
            modalClassName="modal modal-dialog"
            overlayStyle={{}}
            modalStyle={{}}
          >
            <Login
              onLogin={ this.props.onLogin }
              onRegister={ this.props.onRegister }
              onClose={ ::this.toggleLoginModal }
              isModal
            />
          </Modal>
        */}
      </div>
    )
  }
}
