import { connect } from 'react-redux';
import { apiBannersRequest } from '../actions';
import UserPage from '../components/user/UserPage';

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

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
