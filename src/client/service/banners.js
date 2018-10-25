import callApi from './callApi'
const path = 'banners'

export const getBanners = async () => {
  return await callApi(path)
}

export const getBannerById = async ({ id }) => {
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