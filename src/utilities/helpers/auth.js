import AxiosClient from '../../config/axios';
import {getStorage, removeStorage} from './asyncStorage';
import {USER_TOKEN} from '../constants/storage';

export function initAxiosInterceptors() {
  AxiosClient.interceptors.request.use(async (config) => {
    const token = await getStorage(USER_TOKEN);
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  });

  AxiosClient.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        removeStorage(USER_TOKEN);
      } else {
        return Promise.reject(error);
      }
    },
  );
}
