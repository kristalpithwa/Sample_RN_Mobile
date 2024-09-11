import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ScreenName} from '../Theme';
import LoginScreen from '../Container/Auth/Login/Login';

export default function AuthStack({navigation}) {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator
      name={ScreenName.auth.AuthRoot}
      initialRouteName={ScreenName.auth.Login} // Means Initial screen
      screenOptions={{
        headerShown: false,
        hideNavBar: false,
      }}>
      <Screen component={LoginScreen} name={ScreenName.auth.Login} />
    </Navigator>
  );
}
