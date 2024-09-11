import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

// Main Navigation Flow
export default function RouterComponent(props) {
  const {isAuth} = props;

  return (
    <NavigationContainer>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
