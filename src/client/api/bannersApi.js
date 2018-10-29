import callApi from './callApi'
const path = 'bannersss'

const getBanners = async () => {
  return await callApi(path)
}

const getBannerById = async ({ id }) => {
  return await callApi(path, {
    body: {
      id
    }
  })
}

export default {
  getBanners,
  getBannerById
}