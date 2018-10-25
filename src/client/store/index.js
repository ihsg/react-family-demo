import devConfigureStore from './configureStore.dev'
import prodConfigureStore from './configureStore.prod'

export default () => {
  const configureStore = process.env.NODE_ENV !== 'production' ? devConfigureStore : prodConfigureStore;
  return configureStore()
}
