import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginPage extends Component {
  componentWillReceiveProps(nextProps) {
    const { isLogin, history, from } = nextProps;
    if (isLogin) {
      history.replace({ ...from });
    }
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <h1>This is Login Page</h1>
        <button onClick={onClick} type="button">Login</button>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  from: PropTypes.object.isRequired,
};

export default LoginPage;
