import createAction from './createAction';

export const API_BANNERS_REQUEST = 'API_BANNERS_REQUEST';
export const API_BANNERS_SUCCESS = 'API_BANNERS_SUCCESS';
export const API_BANNERS_FAILURE = 'API_BANNERS_FAILURE';

export const apiBannersRequest = () => createAction(API_BANNERS_REQUEST);
export const apiBannersSuccess = bannerList => createAction(API_BANNERS_SUCCESS, bannerList);
export const apiBannersFailure = errorMessage => createAction(API_BANNERS_FAILURE, errorMessage);
