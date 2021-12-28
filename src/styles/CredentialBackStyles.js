import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  containerCredentialBack: {
    alignItems: 'center',
    backgroundColor: '#1b396a',
    borderRadius: 10,
    padding: 10,
    width: wp('80%'),
    height: hp('70%'),
  },
  logoSep: {
    width: wp('30%'),
    height: hp('7%'),
    resizeMode: 'center',
    marginBottom: 15,
  },
  logoTecIstmo: {
    width: wp('30%'),
    height: hp('6%'),
    resizeMode: 'center',
    marginBottom: 15,
  },
  campus: {
    color: '#ffffff',
    fontFamily: 'MontserratBold',
    fontSize: hp('2%'),
    textAlign: 'center',
    marginBottom: 30,
  },
  headings: {
    color: '#ffffff80',
    textTransform: 'uppercase',
    fontFamily: 'MontserratMedium',
    fontSize: hp('1.8%'),
    marginBottom: 10,
  },
  subheadings: {
    color: '#ffffff',
    fontFamily: 'MontserratMedium',
    fontSize: hp('2%'),
    textAlign: 'center',
    marginBottom: 10,
  },
})
