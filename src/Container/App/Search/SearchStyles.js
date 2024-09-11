import {StyleSheet} from 'react-native';
import {Colors, Fonts, Responsive} from '../../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTxt: {
    color: Colors.black,
    fontFamily:Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(22),
  },
});
