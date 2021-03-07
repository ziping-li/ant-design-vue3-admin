import axios from 'axios';
import { message } from 'ant-design-vue';

export default ({ t }: any, inject: any) => {
  const request = axios.create({
    baseURL: '/api',
  });

  request.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  request.interceptors.response.use(
    function (response) {
      if (response?.data?.code !== "S_00000") {
        message.error(t(`ApiError.${response?.data?.code}`));
        return Promise.reject(response);
      }

      return response?.data;
    },
    async function (error) {
      return Promise.reject(error);
    }
  );
  inject("request", request);
};
