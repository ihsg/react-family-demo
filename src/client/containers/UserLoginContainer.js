import { connect } from 'react-redux';
import { userLoginRequest } from '../actions';
import LoginPage from '../components/user/LoginPage';

const mapStateToProps = (state) => {
  const { location } = state.router;
  const { loading, isLogin } = state.user;
  return {
    loading,
    isLogin,
    from: location && location.state && location.state.from,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(userLoginRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
