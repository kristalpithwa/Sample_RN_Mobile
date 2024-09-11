import React, {useEffect, useState} from 'react';
import {View, LogBox, StatusBar, Platform} from 'react-native';

import {Colors, Constant} from './src/Theme';
import {setUserDetails} from './src/Redux/UserDetailsSlice';

import store from './src/Redux/Store';
import RouterComponent from './src/Router/Router';
import SplashScreen from './src/Container/Auth/Splash/Splash';
import {changeLanguage} from './src/Assets/locales/Localization';

import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  LogBox.ignoreAllLogs();
  const [isAuth, setAuth] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getLoggedInSession();
    getLanguageCode();
  }, []);

  useEffect(() => {
    const login = Constant.commonConstant.emitter.addListener(
      Constant.eventListenerKeys.Login,
      () => {
        console.log('=== Login ===');
        getLoggedInSession();
      },
    );

    const logout = Constant.commonConstant.emitter.addListener(
      Constant.eventListenerKeys.Logout,
      () => {
        console.log('=== Logout ===');
        getLoggedInSession();
      },
    );

    return () => {
      login.remove();
      logout.remove();
    };
  }, []);

  const getLoggedInSession = async () => {
    await AsyncStorage.getItem(Constant.asyncStorageKeys.UserDetails).then(
      res => {
        if (res && res !== 'null' && res !== undefined) {
          let response = JSON.parse(res);
          store.dispatch(setUserDetails(response));
          setAuth(true);
        } else {
          setAuth(false);
        }
      },
    );

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  const getLanguageCode = async () => {
    await AsyncStorage.getItem(Constant.asyncStorageKeys.LanguageCode).then(
      res => {
        if (res && res !== 'null' && res !== undefined) {
          let response = JSON.parse(res);
          changeLanguage(response);
        } else {
          changeLanguage('en');
        }
      },
    );
  };

  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.transparent}
          translucent={Platform.OS === 'android'}
        />
        {loader ? <SplashScreen /> : <RouterComponent isAuth={isAuth} />}
      </View>
    </Provider>
  );
}
