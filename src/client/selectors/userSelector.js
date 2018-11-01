import { createSelector } from 'reselect';

const getUser = state => state.user;
export const isLogin = createSelector(getUser, user => user && user.isLogin);

export default {
  isLogin,
};
