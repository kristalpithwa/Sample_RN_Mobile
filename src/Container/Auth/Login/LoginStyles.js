import {StyleSheet} from 'react-native';
import {Colors, Fonts, Responsive} from '../../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTxt: {
    color: Colors.black,
    fontFamily: Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(22),
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    width: Responsive.widthPercentageToDP(50),
    height: Responsive.heightPercentageToDP(5),
    marginTop: Responsive.heightPercentageToDP(3),
  },
  loginBtnTxt: {
    color: Colors.white,
    fontFamily: Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(22),
  },
});
