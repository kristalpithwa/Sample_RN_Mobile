import React from 'react';
import {Image, View} from 'react-native';
import {Colors, Responsive} from '../../Theme';

export const TabIcon = props => {
  return (
    <View>
      <Image
        source={props?.icon}
        resizeMode={'contain'}
        style={{
          width: Responsive.widthPercentageToDP(8),
          height: Responsive.heightPercentageToDP(5),
          tintColor: props?.isFocused ? Colors.white : Colors.gray,
        }}
      />
    </View>
  );
};
