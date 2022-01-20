import axios from 'axios';

const baseURL = 'https://7.react.pages.academy/six-cities';
const timeout = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('X-Token') ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: baseURL,
    timeout: timeout,
    headers: {
      'X-Token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
