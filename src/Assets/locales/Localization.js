import LocalizedStrings from 'react-native-localization';

// Import all locales
import english from './English';
import spanish from './Spanish';

// Define the supported translations
let Strings = new LocalizedStrings({
  en: english,
  sp: spanish,
});

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return Strings[name];
}

export const changeLanguage = languageKey => {
  console.log('languageKey =>', languageKey);
  Strings?.setLanguage(languageKey);
};

export const getLanguage = () => {
  const getLanguage = Strings?.getLanguage();
  return getLanguage;
};

// export async function changeLanguage(language) {
//   console.log('changeLanguage =>', language);

//   I18n.locale = language;
//   await AsyncStorage.setItem(
//     Constant.asyncStorageKeys.languageCode,
//     language,
//   ).then(() => {
//     setTimeout(() => {
//       I18n.locale = language;
//       RNRestart.Restart();
//     }, 300);
//   });
// }

export default Strings;
