import AsyncStorage from '@react-native-async-storage/async-storage';
import {Constant} from '../Theme';

// UserDetails

export const setUserDetail = async value => {
  await AsyncStorage.setItem(
    Constant.asyncStorageKeys.UserDetails,
    JSON.stringify(value),
  );
};

export const getUserDetails = async () => {
  let response;
  await AsyncStorage.getItem(Constant.asyncStorageKeys.UserDetails).then(
    res => {
      response = JSON.parse(res);
    },
  );
  return response;
};

export const removeUserDetails = async () => {
  await AsyncStorage.removeItem(Constant.asyncStorageKeys.UserDetails);
};

// Localization

export const getLanguageCode = async () => {
  let response;
  await AsyncStorage.getItem(Constant.asyncStorageKeys.LanguageCode).then(
    res => {
      response = JSON.parse(res);
    },
  );
  return response;
};

export const setLanguageCode = async value => {
  await AsyncStorage.setItem(
    Constant.asyncStorageKeys.LanguageCode,
    JSON.stringify(value),
  );
};
