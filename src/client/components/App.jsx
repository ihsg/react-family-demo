import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { user, userLogin, userRegister } from '../router/paths';
import './app.scss';

const App = ({ onClick, loading, bannerList }) => (
  <div>
    <h1 className="test">Hello, welcome to the React Family Demo!</h1>
    <ul>
      <li>
        <Link to={userLogin}>Login</Link>
      </li>
      <li>
        <Link to={userRegister}>Register</Link>
      </li>
      <li>
        <Link to={user}>User</Link>
      </li>
    </ul>
    <button className="btnTest" onClick={onClick} type="button">
      Test Action
    </button>
    {loading ? (<div className="loading" />) : null}
    {bannerList.map(b => (
      <div style={{ textAlign: 'center' }}>
        <img src={b.imageUrl} alt="test" />
      </div>
    ))}
  </div>
);

App.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  bannerList: PropTypes.array.isRequired,
};

export default App;
