import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import {TabView, TabBar} from 'react-native-tab-view';
import {Fonts, Colors, Responsive} from '../../../Theme';

export default function TabViewScreen({navigation, route}) {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  const [routes] = useState([
    {id: 1, key: 'first', title: 'Your Groups'},
    {id: 2, key: 'second', title: 'Suggested Groups'},
  ]);

  const [menuList] = useState([
    {id: 1, name: 'Drawer'},
    {id: 2, name: 'Localization'},
    {id: 3, name: 'Customize QR Code'},
    {id: 4, name: 'Tab View'},
    {name: 'Logout'},
  ]);

  // Tab View

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return (
          <FlatList
            data={menuList}
            renderItem={renderMenuList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              marginTop: Responsive.heightPercentageToDP(2),
            }}
          />
        );
      case 'second':
        return (
          <FlatList
            data={menuList}
            renderItem={renderMenuList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              marginTop: Responsive.heightPercentageToDP(2),
            }}
          />
        );
      default:
        return null;
    }
  };

  const renderTabBar = props => {
    return (
      <TabBar
        inactiveColor={'black'}
        activeColor={'black'}
        {...props}
        style={{
          backgroundColor: 'red',
        }}
        indicatorStyle={{backgroundColor: 'blue'}}
      />
    );
  };

  const renderMenuList = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: Responsive.widthPercentageToDP(5),
          height: Responsive.heightPercentageToDP(5),
          width: Responsive.widthPercentageToDP(90),
          backgroundColor: 'red',
          marginBottom: Responsive.heightPercentageToDP(3),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.homeTxt}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TabView
        style={{marginTop: Responsive.heightPercentageToDP(5)}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        initialLayout={{width: layout.width}}
      />

      {/* 

      <TouchableOpacity
        onPress={() => onPressEnglish()}
        style={{
          marginLeft: Responsive.widthPercentageToDP(5),
          height: Responsive.heightPercentageToDP(5),
          width: Responsive.widthPercentageToDP(90),
          backgroundColor: 'red',
          marginTop: Responsive.heightPercentageToDP(2),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.homeTxt}>
          {strings(ScreenConstant.Change_Language_To_English)}
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn2: {
    marginLeft: Responsive.widthPercentageToDP(5),
    height: Responsive.heightPercentageToDP(5),
    width: Responsive.widthPercentageToDP(90),
    backgroundColor: 'red',
    marginTop: Responsive.heightPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeTxt: {
    color: Colors.black,
    fontFamily: Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(18),
    marginLeft: Responsive.widthPercentageToDP(3),
  },
});
