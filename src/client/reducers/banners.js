import { API_BANNERS_REQUEST, API_BANNERS_SUCCESS, API_BANNERS_FAILURE } from '../actions';

const initState = {
  loading: false,
  bannerList: [],
  errorMessage: undefined,
};

export default (state = initState, action) => {
  switch (action.type) {
    case API_BANNERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_BANNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        bannerList: action.payload,
      };
    case API_BANNERS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
