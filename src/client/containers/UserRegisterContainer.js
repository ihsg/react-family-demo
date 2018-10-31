import { connect } from 'react-redux';
import { apiBannersRequest } from '../actions';
import RegisterPage from '../components/user/RegisterPage';

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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
