import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { root } from '../../router/paths';

class UserPage extends Component {
  componentWillReceiveProps(nextProps) {
    const { isLogin, history } = nextProps;
    if (!isLogin) {
      history.replace({ pathname: root });
    }
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <h1>This is User Page</h1>
        <button onClick={onClick} type="button">Logout</button>
      </div>
    );
  }
}

UserPage.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default UserPage;
