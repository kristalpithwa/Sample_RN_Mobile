import {StyleSheet} from 'react-native';
import {Colors, Fonts, Responsive} from '../../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Responsive.heightPercentageToDP(8),
    marginLeft: Responsive.widthPercentageToDP(5),
  },
  drawerIcon: {
    width: Responsive.widthPercentageToDP(8),
    height: Responsive.heightPercentageToDP(5),
  },
  homeTxt: {
    color: Colors.black,
    fontFamily: Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(22),
    marginLeft: Responsive.widthPercentageToDP(22),
  },
  languageTxt: {
    textAlign: 'center',
    color: Colors.black,
    fontFamily: Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(22),
    marginTop: Responsive.heightPercentageToDP(30),
  },
  language2Txt: {
    textAlign: 'center',
    color: Colors.black,
    fontFamily: Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(22),
  },
  logoutTxt: {
    textAlign: 'center',
    color: Colors.black,
    fontFamily: Fonts.fonts.themeFontRegular,
    fontSize: Responsive.convertFontScale(22),
    marginTop: Responsive.heightPercentageToDP(30),
  },
});
