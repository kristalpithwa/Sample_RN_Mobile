import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {setLanguageCode} from '../../../Helper/AsyncStorageHandler';
import {Fonts, Colors, Responsive, ScreenConstant} from '../../../Theme';
import {changeLanguage, strings} from '../../../Assets/locales/Localization';

import {useSelector} from 'react-redux';

export default function LocalizationScreen({navigation, route}) {
  const userDetails = useSelector(
    ({userDetailsStore}) => userDetailsStore.userDetails,
  );
  const [refresh, setRefresh] = useState(false);

  // onPress Method

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPressSpanish()}
        style={{
          marginLeft: Responsive.widthPercentageToDP(5),
          height: Responsive.heightPercentageToDP(5),
          width: Responsive.widthPercentageToDP(90),
          backgroundColor: 'red',
          marginTop: Responsive.heightPercentageToDP(10),
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
