import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import {
  Constant,
  Responsive,
  ScreenConstant,
  Colors,
  Fonts,
  ScreenName,
} from '../../../Theme';
import {
  setLanguageCode,
  removeUserDetails,
} from '../../../Helper/AsyncStorageHandler';
import {changeLanguage, strings} from '../../../Assets/locales/Localization';

import {useSelector} from 'react-redux';

export default function HomeScreen({navigation, route}) {
  const userDetails = useSelector(
    ({userDetailsStore}) => userDetailsStore.userDetails,
  );

  const [refresh, setRefresh] = useState(false);
  const [menuList, setMenuList] = useState([
    {id: 1, name: 'Drawer'},
    {id: 2, name: 'Localization'},
    {id: 3, name: 'Customize QR Code'},
  ]);

  // onPress Method

  const onPressDrawer = () => {
    navigation?.openDrawer();
  };

  const onPressLocalization = () => {
    console.log('=== onPressLocalization ===');
    navigation.navigate(ScreenName.app.LocalizationScreen);
  };

  const onPressCustomizeQR = () => {
    console.log('=== onPressCustomize ===');
    navigation.navigate(ScreenName.app.CustomizeQRCodeScreen);
  };

  const onPressSpanish = () => {
    changeLanguage('sp');
    setLanguageCode('sp');
    setRefresh(!refresh);
  };

  const onPressEnglish = () => {
    changeLanguage('en');
    setLanguageCode('en');
    setRefresh(!refresh);
  };

  const onPressLogout = () => {
    removeUserDetails();
    Constant.commonConstant.emitter.emit(Constant.eventListenerKeys.Logout);
  };

  const onPressMenu = item => {
    if (item.id === 1) {
      onPressDrawer();
    } else if (item.id === 2) {
      onPressLocalization();
    } else if (item.id === 3) {
      onPressCustomizeQR();
    }
  };

  const renderMenuList = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressMenu(item, index)}
        style={styles.btn}>
        <Text style={styles.homeTxt}>
          {item.id}.{item.name}
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
    marginLeft: Responsive.widthPercentageToDP(5),
    height: Responsive.heightPercentageToDP(5),
    width: Responsive.widthPercentageToDP(90),
    marginBottom: Responsive.heightPercentageToDP(2),
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  btn2: {
    marginLeft: Responsive.widthPercentageToDP(5),
    height: Responsive.heightPercentageToDP(5),
    width: Responsive.widthPercentageToDP(90),
    backgroundColor: 'red',
    marginTop: Responsive.heightPercentageToDP(2),
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
