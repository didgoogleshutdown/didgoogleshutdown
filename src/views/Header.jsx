import React from 'react';
import { Link } from 'react-router';

import './Header.scss'

export default class Header extends React.Component {

  static propTypes = {
    user: React.PropTypes.object
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
              <li>
                <a href="https://www.patreon.com/pleasurekevin">Patreon</a>
              </li>

              { ( this.props.user && this.props.user.role === 'admin' ) &&
                <li>
                  <a href="#">Moderate</a>
                </li>
              }

              { this.props.user &&
                <li>
                  <a href="#">Logout</a>
                </li>
              }

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
