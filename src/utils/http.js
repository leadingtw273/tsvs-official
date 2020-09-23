import axios from "axios";

const getBaseUrl = env => {
  let base = {
    production: "/",
    development: "http://localhost:3000",
    test: "http://localhost:3001"
  }[env];
  if (!base) {
    base = "/";
  }
  return base;
};

export default class Api {
  constructor() {
    this._instance = axios.create({
      baseURL: getBaseUrl(process.env.NODE_ENV)
    });

    this.setDefaultInterceptors();
  }

  setDefaultInterceptors() {
    // Add a request interceptor
    this._interceptorsRequest = this._instance.interceptors.request.use(
      function(config) {
        // Do something before request is sent
        return config;
      },
      function(error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this._interceptorsResponse = this._instance.interceptors.response.use(
      function(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }

  setInterceptorsRequest(interceptors) {
    this._instance.interceptors.request.eject(this._interceptorsRequest);
    this._interceptorsRequest = this._instance.interceptors.request.use(interceptors);
  }

  setInterceptorsResponse(interceptors) {
    this._instance.interceptors.response.eject(this._interceptorsResponse);
    this._interceptorsResponse = this._instance.interceptors.response.use(interceptors);
  }

  async get(url, params = {}) {
    return await this._instance.get(url, { params });
  }

  async post(url, data, params = {}) {
    return await this._instance.post(url, data, { params });
  }

  async put(url, data, params = {}) {
    return await this._instance.put(url, data, { params });
  }

  async patch(url, data, params = {}) {
    return await this._instance.patch(url, data, { params });
  }

  async delete(url, params = {}) {
    return await this._instance.delete(url, { params });
  }
}
