import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackButton from '../../../Components/BackButton/BackButton';

export default function AnimationScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text>AnimationScreen</Text>
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
