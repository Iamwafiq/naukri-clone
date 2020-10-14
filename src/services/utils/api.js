import axios from 'axios';
import { toLower } from 'lodash';
import { storageService } from './storageService';

const baseURL = 'https://jobs-api.squareboat.info/api/v1';
const authToken = localStorage.getItem('authToken');

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
if (authToken) {
  headers['Authorization'] = authToken;
}

export const api = axios.create({ baseURL, headers, timeout: 1800000 });

const formDataHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export function generateResourceMethod(resouceApi, method) {
  return function (path, data, config = {}) {
    const apiCall = resouceApi[method](path, data, config);
    const payload = data;

    return apiCall.then(
      (responseWrapper) => {
        console.log(responseWrapper);
        let { data } = responseWrapper;
        const { success } = data;

        return data;
      },
      (res) => {
        console.log('API fail');

        return {
          data: res.response.data,
        };
      },
    );
  };
}

export const apiResource = {
  resourceAPI: api,
  get: generateResourceMethod(api, 'get'),
  post: generateResourceMethod(api, 'post'),
  put: generateResourceMethod(api, 'put'),
  delete: generateResourceMethod(api, 'delete'),
};
