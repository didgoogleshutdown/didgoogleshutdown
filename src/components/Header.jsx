import React from 'react'
import Link from 'gatsby-link'
import Modal from 'react-dumb-modal'

export default class Header extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    onLogin: React.PropTypes.func,
    onLogout: React.PropTypes.func,
    onRegister: React.PropTypes.func
  }

  render () {
    const colors = [ '#4286F5', '#E84235', '#F7BC33', '#56AA54' ]
    const dgsd = ['D', 'G', 'S', 'D'].map( (letter, index) => (
      <span key={letter + index} style={ { color: colors[index] }}>{ letter }</span>
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
          </ul>
        </div>
      </div>
    )
  }
}
