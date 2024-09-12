import React from 'react';
import {StyleSheet} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors, Images, Responsive, ScreenName} from '../Theme';

import DrawerBar from '../Components/Drawer/Drawer';
import {TabIcon} from '../Components/TabIcon/TabIcon';

import HomeScreen from '../Container/App/Home/Home';
import SearchScreen from '../Container/App/Search/Search';
import LocalizationScreen from '../Container/App/Localization/Localization';
import {createStackNavigator} from '@react-navigation/stack';
import CustomizeQRCodeScreen from '../Container/App/CustomizeQRCode/CustomizeQRCode';
import TabViewScreen from '../Container/App/TabView/TabView';

export default function AppStack({navigation}) {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const {Screen} = createStackNavigator();

  const BottomTabBar = () => {
    return (
      <Tab.Navigator
        backBehavior={ScreenName.app.AppRoot}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            ...styles.TabBarStyle,
          },
        }}
        initialRouteName={ScreenName.app.Home}>
        {/* Home Tab */}

        <Tab.Screen
          name={ScreenName.app.Home}
          component={HomeScreen}
          options={({route}) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return <TabIcon icon={Images.home} isFocused={focused} />;
            },
          })}
        />

        {/* Search Tab */}

        <Tab.Screen
          name={ScreenName.app.Search}
          component={SearchScreen}
          options={({route}) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return <TabIcon icon={Images.search} isFocused={focused} />;
            },
          })}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName={ScreenName.app.BottomTabBarRoot}
      drawerContent={props => <DrawerBar {...props} />}
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 50,
        drawerActiveBackgroundColor: 'transparent',
        drawerStyle: {
          ...styles.DrawerStyle,
        },
      }}>
      <Drawer.Screen
        component={BottomTabBar}
        name={ScreenName.app.BottomTabBarRoot}
      />

      <Screen
        name={ScreenName.app.LocalizationScreen}
        component={LocalizationScreen}
      />
      <Screen
        name={ScreenName.app.CustomizeQRCodeScreen}
        component={CustomizeQRCodeScreen}
      />
      <Screen name={ScreenName.app.TabViewScreen} component={TabViewScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  TabBarStyle: {
    shadowColor: Colors.black,
    backgroundColor: Colors.black,
  },
  DrawerStyle: {
    width: Responsive.widthPercentageToDP(60),
  },
});
