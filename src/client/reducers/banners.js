import { LOAD_BANNERS, RECEIVE_BANNERS } from '../actions'

const initState = {
  bannerList: [],
  loading: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_BANNERS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_BANNERS:
      return {
        ...state,
        loading: false,
        bannerList: action.bannerList
      }
    default:
      return state
  }
}