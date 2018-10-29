import callApi from './callApi';

const path = 'bannersss';

const getBanners = async () => await callApi(path);

const getBannerById = async ({ id }) => await callApi(path, {
  body: {
    id,
  },
});

export default {
  getBanners,
  getBannerById,
};
