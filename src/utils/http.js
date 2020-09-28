import axios from "axios";
import store from "@/store";

const getBaseUrl = env => {
  let base = {
    production: "https://3ccc447e8f8f.ngrok.io",
    development: "https://3ccc447e8f8f.ngrok.io"
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
        return response.data;
      },
      function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.response == null) {
          store.dispatch("dialog/setNetworkError", true);
          return { success: false };
        } else {
          const { code, msg, detail } = error.response.data;
          store.dispatch("dialog/setResponseError", {
            show: true,
            code,
            msg,
            detail
          });

          return error.response.data;
        }
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

  async get(url, option = {}) {
    return await this._instance.get(url, option);
  }

  async post(url, data, option = {}) {
    return await this._instance.post(url, data, option);
  }

  async put(url, data, option = {}) {
    return await this._instance.put(url, data, option);
  }

  async patch(url, data, option = {}) {
    return await this._instance.patch(url, data, option);
  }

  async delete(url, option = {}) {
    return await this._instance.delete(url, option);
  }
}
