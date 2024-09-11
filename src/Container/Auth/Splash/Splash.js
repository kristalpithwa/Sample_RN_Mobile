import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
