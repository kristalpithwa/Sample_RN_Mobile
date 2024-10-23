import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import {Fonts, Colors, Responsive, ScreenConstant} from '../../../Theme';
import {changeLanguage, strings} from '../../../Assets/locales/Localization';

import BackButton from '../../../Components/BackButton/BackButton';
import {AuthContext} from '../../../Context/Context';
import {setLanguageCode} from '../../../Helper/AsyncStorageHandler';

export default function LocalizationScreen({navigation, route}) {
  const [refresh, setRefresh] = useState(false);
  const {getLanguage} = useContext(AuthContext);

  // onPress Method

  const onPressSpanish = async () => {
    changeLanguage('sp');
    setLanguageCode('sp');
    // getLanguage();
    setRefresh(!refresh);
  };

  const onPressEnglish = () => {
    changeLanguage('en');
    setLanguageCode('en');
    // getLanguage();
    setRefresh(!refresh);
  };

  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />

      <TouchableOpacity
        onPress={() => onPressSpanish()}
        style={{
          marginLeft: Responsive.widthPercentageToDP(5),
          height: Responsive.heightPercentageToDP(5),
          width: Responsive.widthPercentageToDP(90),
          backgroundColor: 'red',
          marginTop: Responsive.heightPercentageToDP(3),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.homeTxt}>
          {strings(ScreenConstant.Change_Language_To_Spanish)}
        </Text>
      </TouchableOpacity>

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
      </TouchableOpacity>
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
