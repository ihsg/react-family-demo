import callApi from './callApi';

const path = 'banners';

export const getBanners = async () => await callApi(path);

export const getBannerById = async ({ id }) => await callApi(path, {
  body: {
    id,
  },
});

export default {
  getBanners,
  getBannerById,
};
