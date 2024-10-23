import React, {createContext, useState, useEffect} from 'react';
import {Constant} from '../Theme';
import {changeLanguage} from '../Assets/locales/Localization';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(null);

  useEffect(() => {
    loadUserData();
    getLanguage();
  }, []);

  const loadUserData = async () => {
    await AsyncStorage.getItem(Constant.asyncStorageKeys.UserDetails)
      .then(res => {
        if (res && res !== 'null' && res !== undefined) {
          setUser(JSON.parse(res));
        }
      })
      .catch(() => {
        console.error('Failed to load user data', e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getLanguage = async () => {
    await AsyncStorage.getItem(Constant.asyncStorageKeys.LanguageCode).then(
      res => {
        if (res && res !== 'null' && res !== undefined) {
          changeLanguage(JSON.parse(res));
          setCurrentLanguage(JSON.parse(res));
        } else {
          changeLanguage('en');
          setCurrentLanguage('en');
        }
      },
    );
  };

  const login = async userData => {
    try {
      await AsyncStorage.setItem(
        Constant.asyncStorageKeys.UserDetails,
        JSON.stringify(userData),
      );
      setUser(userData); // Set the user state
    } catch (e) {
      console.error('Failed to save user data', e);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(Constant.asyncStorageKeys.UserDetails);
      setUser(null); // Clear user state
    } catch (e) {
      console.error('Failed to remove user data', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{user, login, logout, loading, getLanguage, currentLanguage}}>
      {children}
    </AuthContext.Provider>
  );
};
