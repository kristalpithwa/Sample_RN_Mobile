import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import {removeUserDetails} from '../../../Helper/AsyncStorageHandler';
import {Constant, Responsive, Colors, Fonts, ScreenName} from '../../../Theme';

import {useSelector} from 'react-redux';

export default function HomeScreen({navigation, route}) {
  const userDetails = useSelector(
    ({userDetailsStore}) => userDetailsStore.userDetails,
  );
  const [menuList] = useState([
    {id: 1, name: 'Drawer'},
    {id: 2, name: 'Localization'},
    {id: 3, name: 'Customize QR Code'},
    {id: 4, name: 'Tab View'},
    {name: 'Logout'},
  ]);

  // onPress Method

  const onPressMenu = (item, index) => {
    if (index === 0) {
      onPressDrawer();
    } else if (index === 1) {
      onPressLocalization();
    } else if (index === 2) {
      onPressCustomizeQR();
    } else if (index === 3) {
      onPressTabView();
    } else {
      onPressLogout();
    }
  };

  const onPressDrawer = () => {
    navigation?.openDrawer();
  };

  const onPressLocalization = () => {
    navigation.navigate(ScreenName.app.LocalizationScreen);
  };

  const onPressCustomizeQR = () => {
    navigation.navigate(ScreenName.app.CustomizeQRCodeScreen);
  };

  const onPressTabView = () => {
    navigation.navigate(ScreenName.app.TabViewScreen);
  };

  const onPressLogout = () => {
    removeUserDetails();
    Constant.commonConstant.emitter.emit(Constant.eventListenerKeys.Logout);
  };

  // FlatList Method

  const renderMenuList = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressMenu(item, index)}
        style={styles.btn}>
        <Text style={styles.homeTxt}>
          {index}.{item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuList}
        renderItem={renderMenuList}
        keyExtractor={(item, index) => index.toString()}
        style={{marginTop: Responsive.heightPercentageToDP(7)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'red',
    justifyContent: 'center',
    width: Responsive.widthPercentageToDP(90),
    height: Responsive.heightPercentageToDP(5),
    marginLeft: Responsive.widthPercentageToDP(5),
    marginBottom: Responsive.heightPercentageToDP(2),
  },
  homeTxt: {
    color: Colors.black,
    fontFamily: Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(18),
    marginLeft: Responsive.widthPercentageToDP(3),
  },
});
