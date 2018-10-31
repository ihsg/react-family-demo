import { connect } from 'react-redux';
import { apiBannersRequest } from '../actions';
import LoginPage from '../components/user/LoginPage';

const mapStateToProps = (state) => {
  const { loading, bannerList } = state.banners;
  return {
    loading,
    bannerList,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(apiBannersRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
