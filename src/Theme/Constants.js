// import APIConfig from '../Config/ApiConfig/index';
import {showAlert} from '../Functions/Alerts';
// var {EventEmitter} = require('fbemitter');
// const axiosDefaults = require('axios/lib/defaults');

export const setUserData = UserData => {
  let headers = APIConfig.headers;
  if (UserData && UserData.token) {
    debugLog('User Data :==> \n' + JSON.stringify(UserData));
    headers.Authorization = UserData.token;
    commonConstant.appUser = UserData.userDetail;
  }
  axiosDefaults.headers = headers;
};

export const commonConstant = {
  // emitter: new EventEmitter(),
};

export const eventListenerKeys = {
  Login: 'Login',
  Logout: 'Logout',
};

export const asyncStorageKeys = {
  UserDetails: 'UserDetails',
  UserToken: 'UserToken',
  LanguageCode: 'LanguageCode',
};

export const apiResponse = {
  success: 200,
  fail: 500,
};

export function errorHandle(response) {
  if (response && response?.data && response?.data?.message) {
    showAlert(response.data.message);
  } else {
    showAlert('Please try again');
  }
}

export default {
  errorHandle,
  commonConstant,
  apiResponse,
  // setUserData,
  asyncStorageKeys,
  eventListenerKeys,
};
