export const LOAD_BANNERS = 'LOAD_BANNERS'
export const LOAD_BANNER_BY_ID = 'LOAD_BANNER_BY_ID'
export const RECEIVE_BANNERS = 'RECEIVE_BANNERS'
export const RECEIVE_BANNER = 'RECEIVE_BANNER'

export const loadBanners = () => {
  return {
    type: LOAD_BANNERS,
  }
}

export const loadBannerById = (id) => {
  return {
    type: LOAD_BANNER_BY_ID,
    id,
  }
}

export const receiveBanners = (bannerList) => {
  return {
    type: RECEIVE_BANNERS,
    bannerList
  }
}

export const receiveBanner = (banner) => {
  return {
    type: RECEIVE_BANNER,
    banner
  }
}

export default {
  LOAD_BANNERS,
  LOAD_BANNER_BY_ID,
  RECEIVE_BANNERS,
  RECEIVE_BANNER,

  loadBanners,
  loadBannerById,
  receiveBanners,
  receiveBanner
}