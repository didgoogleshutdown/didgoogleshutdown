import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-dumb-modal'
import Login from './Login'

import './Header.scss'
import './Header-Modal.scss'

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
      <nav className="navbar navbar-default header">
        <div className="container">
          <div className="navar-header">
            <Link to='/' className="navbar-brand">
              { dgsd }?
            </Link>
          </div>
          <div className="nav-links">
            <ul className="list-inline">

              <li>
                <Link to="/about">About</Link>
              </li>

              { this.props.user &&
                <li
                  className="logout-button"
                  onClick={ this.props.onLogout }
                >
                  { this.props.user.name } (logout)
                </li>
              }

              { !this.props.user &&
                <li
                  className="login-button"
                  onClick={ ::this.toggleLoginModal }
                >
                  Login
                </li>
              }

            </ul>
          </div>
        </div>

        { (this.state.showLoginModal && !this.props.user) &&
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
        }

      </nav>
    )
  }
}
