import { root } from './paths';
import AppContainer from '../containers/AppContainer';
import user from './user';

export default {
  path: root,
  exact: true,
  component: AppContainer,
  childRoutes: [
    user,
  ],
};
