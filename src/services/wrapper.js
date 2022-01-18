import axios from 'axios';
import {Endpoint} from './Endpoint';

/**
 * Configure axios base url
 */
const axiosConfig = {
  baseURL: Endpoint.BASE_URL,
};

/**
 * Create axios instance with the configuration
 */
const $axios = axios.create(axiosConfig);

/**
 * Global wrapper function for putting common configurations
 */
const request = async config => {
  config.headers = {
    ...config.headers,
    Accept: 'application/json',
  };
  return await $axios({
    ...config,
  });
};

/**
 * Get request
 */
export const reqGet = async config => {
  return request({
    method: 'GET',
    ...config,
  });
};
