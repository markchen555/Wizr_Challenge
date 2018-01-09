/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';


export class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          Logged in as:
        </div>
        <div>
          <span> Email: {this.props.user.email} </span>
        </div>
        <div>
          <span> Password: {this.props.user.password} </span>
        </div>
      </div>
    );
  }
}

Data.propTypes = {
  user: PropTypes.object,
};

export default Data;

