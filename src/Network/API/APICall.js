import Axios from 'axios';
import {showAlert, showToast} from '../Functions/Alerts';
import Constant from '../Theme/Constants';
import APIConfig from '../Config/ApiConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import APPConfig from '../Helper/APPConfig'
// import {strings} from '../locales/i18n';

const axiosInstance = Axios.create({
  baseURL: APIConfig.baseURL,
  headers: {
    Accept: 'application/json',
    'content-type': 'multipart/form-data',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    if (Constant.commonConstant.authToken) {
      config.headers.Authorization =
        'Bearer ' + Constant.commonConstant.authToken;
    }
    return config;
  },
  error => {
    console.log('axios request error =>', error.response || error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  config => {
    // console.log('axios response =>', config);
    return config;
  },
  error => {
    console.log('axios response error =>', error.response || error);
    return Promise.reject(error);
  },
);

const getFormData = object => {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
};

const APICall = async (
  method = 'post',
  body,
  url = null,
  headers = null,
  formData = false,
) => {
  const config = {
    method: method.toLowerCase(),
    timeout: 1000 * 60 * 2,
  };
  if (url) {
    config.url = url;
  }
  if (body && method.toLowerCase() === 'get') {
    config.params = body;
  } else if (body && method.toLowerCase() === 'post' && !formData) {
    config.data = body;
  } else if (body && method.toLowerCase() === 'post' && formData) {
    config.data = getFormData(body);
  } else {
    config.data = body;
  }
  if (headers) {
    config.headers = headers;
  }
  // console.log('headers ===>>>', config.headers);

  return new Promise(resolve => {
    axiosInstance(config)
      .then(res => resolve({statusCode: res.status, data: res.data}))
      .catch(error => {
        console.log('Promise catch => ', error);

        if (error?.code === 'ERR_NETWORK') {
          // console.log('if', error?.code);
          showToast('Please check you internet connection');
          resolve({statusCode: 400});
          return;
        }

        if (error.response.data) {
          let errorString = '';

          if (error.response.data.problems) {
            const errors = error.response.data.problems;
            for (let i = 0; i < errors.length; i++) {
              errorString =
                errorString === ''
                  ? `${errors[i]}`
                  : `${errorString}\n${errors[i]}`;
            }
          } else if (typeof error.response.data.message === 'string') {
            if (error.response.data.message === 'Validate successfully') {
              if (error.response.data.data) {
                if (error.response.data.data.errors) {
                  if (error.response.data.data.errors.length > 0) {
                    const errors = Object.values(
                      error.response.data.data.errors,
                    );
                    for (let i = 0; i < errors.length; i++) {
                      console.log(errors[i]);
                      errorString = `${errors[i][1]} `;
                    }
                  } else {
                    errorString = error.response.data.message;
                  }
                } else {
                  errorString = error.response.data.message;
                }
              } else {
                errorString = error.response.data.message;
              }
            } else {
              errorString = error.response.data.message;
            }
          } else if (typeof error.response.data.message === 'object') {
            const errors = Object.values(error.response.data.message);
            for (let i = 0; i < errors.length; i++) {
              errorString =
                errorString === ''
                  ? `${errors[i]}`
                  : `${errorString}\n${errors[i]}`;
            }
          }
          console.log('errorString =>', errorString);
          console.log('error.response.status', error.response);

          if (error.response.status === 401) {
            showAlert(error.response.data.message);
            console.log('error 401 => ', error.response.data.message);
          } else {
            showAlert(errorString);
          }
          resolve({
            statusCode: error.response.status,
            data: error.response.data,
          });
          return;
        }
        // if (error.code === 'ECONNABORTED') {
        //   showAlert('Request timeout. Please check your internet connection');
        //   resolve({statusCode: 400});
        //   return;
        // }

        //  showAlert('Something went wrong, Please try again later.');
        resolve({statusCode: 400});
      });
  });
};

export const APICallWithoutErrorMessage = async (
  method = 'post',
  body,
  url = null,
  headers = null,
  formData = false,
) => {
  const config = {
    method: method.toLowerCase(),
    timeout: 1000 * 60 * 2,
  };
  if (url) {
    config.url = url;
  }
  if (body && method.toLowerCase() === 'get') {
    config.params = body;
  } else if (body && method.toLowerCase() === 'post' && !formData) {
    config.data = body;
  } else if (body && method.toLowerCase() === 'post' && formData) {
    config.data = getFormData(body);
  } else {
    config.data = body;
  }
  if (headers) {
    config.headers = headers;
  }
  console.log(config.url);

  return new Promise(resolve => {
    axiosInstance(config)
      .then(res => resolve({statusCode: res.status, data: res.data}))
      .catch(error => {
        console.log(error.data);
        if (error.response.data) {
          if (error.response.status === 502 || error.response.status === 404) {
            showAlert('Something went wrong, Please try again later.');
          }
          let errorString = '';
          if (error.response.data.problems) {
            const errors = error.response.data.problems;
            for (let i = 0; i < errors.length; i++) {
              errorString =
                errorString === ''
                  ? `${errors[i]}`
                  : `${errorString}\n${errors[i]}`;
            }
          } else if (typeof error.response.data.message === 'string') {
            if (error.response.data.message === 'Validate successfully') {
              if (error.response.data.data) {
                if (error.response.data.data.errors) {
                  if (error.response.data.data.errors.length > 0) {
                    const errors = Object.values(
                      error.response.data.data.errors,
                    );
                    for (let i = 0; i < errors.length; i++) {
                      console.log(errors[i]);
                      errorString = `${errors[i][1]} `;
                    }
                  } else {
                    errorString = error.response.data.message;
                  }
                } else {
                  errorString = error.response.data.message;
                }
              } else {
                errorString = error.response.data.message;
              }
            } else {
              errorString = error.response.data.message;
            }
          } else if (typeof error.response.data.message === 'object') {
            const errors = Object.values(error.response.data.message);
            for (let i = 0; i < errors.length; i++) {
              errorString =
                errorString === ''
                  ? `${errors[i]}`
                  : `${errorString}\n${errors[i]}`;
            }
          }
          //showAlert(errorString);

          resolve({
            statusCode: error.response.status,
            data: error.response.data,
          });
          return;
        }
        // if (error.code === 'ECONNABORTED') {
        //   showAlert('Request timeout. Please check your internet connection');
        //   resolve({statusCode: 400});
        //   return;
        // }
        showAlert(strings('SomethingWentWrong'));
        resolve({statusCode: 400});
      });
  });
};

export default APICall;
