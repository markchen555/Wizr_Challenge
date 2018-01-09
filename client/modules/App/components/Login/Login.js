/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';
import apiCaller from '../../../../util/apiCaller';
import Data from './Data';

export class Login extends Component {
  /* YOU CODE HERE */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    apiCaller('login', 'post', { email, password })
      .then((user) => {
        this.setState({ user });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            Login
          </h1>
          <br />
            {!this.state.user ? 'Please Log In' : <Data user={this.state.user} />}
        </div>
        <br />
        <form>
          <label>
            Email:
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="text" value={this.state.password} name="password" onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <button onClick={this.handleSubmit} type="submit">LOGIN</button>
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object,
};

Login.propTypes = {};

export default Login;

