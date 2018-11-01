import { connect } from 'react-redux';
import { userLogoutRequest } from '../actions';
import UserPage from '../components/user/UserPage';

const mapStateToProps = (state) => {
  const { loading, isLogin } = state.user;
  return {
    loading,
    isLogin,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(userLogoutRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
