import { connect } from 'react-redux'
import { loadBanners } from '../actions'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  const { loading, bannerList } = state.banners
  return {
    loading,
    bannerList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(loadBanners())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)