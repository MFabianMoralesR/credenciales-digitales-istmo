import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  containerWelcome: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: hp('70%'),
    width: wp('90%'),
  },
  welcome: {
    color: '#000000',
    fontFamily: 'MontserratSemiBold',
    fontSize: hp('2.5%'),
    textAlign: 'center',
    lineHeight: hp('4%'),
    marginTop: hp('8%'),
    marginBottom: hp('5%'),
  },
  rol: {
    fontFamily: 'MontserratBold',
    fontSize: hp('3%'),
    marginBottom: hp('5%'),
  },
  student: {
    fontFamily: 'MontserratSemiBold',
    fontSize: hp('2.6%'),
    marginBottom: 20,
    lineHeight: hp('4%'),
    textAlign: 'center',
  },
})
