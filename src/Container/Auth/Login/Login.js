import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './LoginStyles';
import {ScreenConstant} from '../../../Theme';
import {AuthContext} from '../../../Context/Context';
import {strings} from '../../../Assets/locales/Localization';

export default function LoginScreen(props) {
  // onPress Methods
  const {login} = useContext(AuthContext);

  console.log('login =>');

  const onPressLogin = async () => {
    const loginDetails = {
      name: 'Danny',
      age: 25,
    };

    login(loginDetails);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={() => onPressLogin()}>
        <Text style={styles.loginBtnTxt}>{strings(ScreenConstant.Login)}</Text>
      </TouchableOpacity>
    </View>
  );
}
