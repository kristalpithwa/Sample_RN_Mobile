import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import {AuthContext} from '../../../Context/Context';
import {Responsive, Colors, Fonts, ScreenName} from '../../../Theme';

export default function HomeScreen({navigation, route}) {
  const {currentLanguage, logout} = useContext(AuthContext);

  const [menuList] = useState([
    {name: 'Drawer'},
    {name: `Localization ${currentLanguage}`},
    {name: 'Customize QR Code'},
    {name: 'Tab View'},
    {name: 'Animation'},
    {name: 'Unity Ads'},
    {name: 'Unity Interstitial Ad'},
    {name: 'Unity Banner Ad'},
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
    } else if (index === 4) {
      onPressAnimation();
    } else if (index === 5) {
      onPressUnityAds();
    } else if (index === 6) {
      onPressUnityInterstitialAd();
    } else if (index === 7) {
      onPressUnityBannerAd();
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

  const onPressAnimation = () => {
    navigation.navigate(ScreenName.app.AnimationScreen);
  };

  const onPressUnityAds = () => {
    navigation.navigate(ScreenName.app.UnityAdsScreen);
  };

  const onPressUnityInterstitialAd = () => {
    navigation.navigate(ScreenName.app.UnityInterstitialAdScreen);
  };

  const onPressUnityBannerAd = () => {
    navigation.navigate(ScreenName.app.UnityBannerAds);
  };

  const onPressLogout = () => {
    logout();
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
