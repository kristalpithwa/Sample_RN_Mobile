// BackButton.js
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Images} from '../../Theme';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={Images.backArrow}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 45,
    marginLeft: 15,
  },
  image: {
    height: 25,
    width: 35,
  },
});

export default BackButton;
