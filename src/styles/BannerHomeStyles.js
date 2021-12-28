import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  containerBanner: {
    backgroundColor: '#1b396a',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('30%'),
    width: wp('100%'),
  },
  textBanner: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: hp('2.5%'),
    marginBottom: 25
  },
  imageBanner: {
    width: wp('40%'),
    height: hp('10%'),
  },
})
