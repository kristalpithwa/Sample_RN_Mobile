import {Alert} from 'react-native';
import {name as appName} from '../../app.json';
import Toast from 'react-native-simple-toast';

export function showToast(message) {
  // setTimeout(() => {
  Toast.show(message, Toast.SHORT);
  // }, 500);
}

export function showAlert(message, title = name, buttonTitle = 'OK') {
  setTimeout(() => {
    Alert.alert(title, message, [{text: buttonTitle}]);
  }, 500);
}

export function showAlertWithYes(message, firstButtonTitle, firstCallback) {
  setTimeout(() => {
    Alert.alert(
      appName,
      message,
      [
        {
          text: firstButtonTitle,
          onPress: () => {
            firstCallback();
          },
        },
      ],
      {cancelable: false},
    );
  }, 500);
}

export function showAlertWithTwoCallback(
  message,
  title = appName,
  firstButtonTitle,
  secondButtonTitle,
  firstCallback,
  secondCallback,
) {
  setTimeout(() => {
    Alert.alert(
      title,
      message,
      [
        {
          text: firstButtonTitle,
          onPress: () => {
            firstCallback();
          },
        },
        {
          text: secondButtonTitle,
          onPress: () => {
            secondCallback();
          },
        },
      ],
      {cancelable: false},
    );
  }, 500);
}
