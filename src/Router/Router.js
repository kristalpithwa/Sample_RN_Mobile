import React, {useContext} from 'react';
import {StatusBar} from 'react-native';

import {Colors} from '../Theme';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthContext} from '../Context/Context';
import SplashScreen from '../Container/Auth/Splash/Splash';

import {NavigationContainer} from '@react-navigation/native';

export default function RouterComponent(props) {
  const {user, loading} = useContext(AuthContext);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.transparent}
        translucent={Platform.OS === 'android'}
      />
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
