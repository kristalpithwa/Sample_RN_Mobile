import React from 'react';
import {Text, View} from 'react-native';
import {Colors, Fonts, Responsive} from '../../../Theme';

export default function SearchScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: Colors.black,
          fontFamily: Fonts.fonts.themeFontRegular,
          fontSize: Responsive.convertFontScale(18),
        }}>
        Search
      </Text>
    </View>
  );
}
