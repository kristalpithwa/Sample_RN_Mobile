import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './LoginStyles';
import {Constant, ScreenConstant} from '../../../Theme';
import {strings} from '../../../Assets/locales/Localization';
import {setUserDetails} from '../../../Redux/UserDetailsSlice';
import {setUserDetail} from '../../../Helper/AsyncStorageHandler';

import {useDispatch} from 'react-redux';

export default function LoginScreen(props) {
  const dispatch = useDispatch();

  // onPress Methods

  const onPressLogin = async () => {
    const loginDetails = {
      name: 'Danny',
      age: 25,
    };

    await setUserDetail(loginDetails);
    dispatch(setUserDetails(loginDetails));

    await Constant.commonConstant.emitter.emit(
      Constant.eventListenerKeys.Login,
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={() => onPressLogin()}>
        <Text style={styles.loginBtnTxt}>{strings(ScreenConstant.Login)}</Text>
      </TouchableOpacity>
    </View>
  );
}
