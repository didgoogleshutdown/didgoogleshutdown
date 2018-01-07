import React from 'react';

export default class Login extends React.Component {
  static propTypes = {
    onLogin: React.PropTypes.func,
    onRegister: React.PropTypes.func
  }

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      registering: false
    }
  }

  changeHandler (property, event) {
    this.setState({ [property]: event.target.value })
  }

  registerModeHandler () {
    this.setState({ registering: !this.state.registering })
  }

  submitHandler () {
    if ( this.state.registering ) {
      this.props.onRegister({ ...this.state })
    } else {
      this.props.onLogin({ ...this.state })
    }
  }

  render () {
    return (
      <div className="login">
        <h1>{ !this.state.registering ? 'Login' : 'Register' }</h1>
        { this.state.registering &&
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="username form-control"
              onChange={ this.changeHandler.bind(this, 'name') }
              value={ this.state.name }
            />
          </div>
        }

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="username form-control"
            onChange={ this.changeHandler.bind(this, 'email') }
            value={ this.state.email }
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="password form-control"
            onChange={ this.changeHandler.bind(this, 'password') }
            value={ this.state.password }
          />
        </div>

        <div className="dialog-buttons">
          <button
            className="btn btn-default"
            onClick={ ::this.registerModeHandler }
          >
            { !this.state.registering ? 'Register' : 'Cancel' }
          </button>

          <button
            className="btn btn-default"
            onClick={ ::this.submitHandler }
          >
            Submit
          </button>
        </div>

      </div>
    )
  }
}
