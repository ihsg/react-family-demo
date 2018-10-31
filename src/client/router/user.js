import { user, userLogin, userRegister } from './paths';
import UserContainer from '../containers/UserContainer';
import UserLoginContainer from '../containers/UserLoginContainer';
import UserRegisterContainer from '../containers/UserRegisterContainer';

export default {
  path: user,
  exact: true,
  component: UserContainer,
  requireAuthorization: true,
  childRoutes: [
    {
      path: userLogin,
      component: UserLoginContainer,
      requireAuthorization: false,
    },
    {
      path: userRegister,
      component: UserRegisterContainer,
      requireAuthorization: false,
    },
  ],
};
