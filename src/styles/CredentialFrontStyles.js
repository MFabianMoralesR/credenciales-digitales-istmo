import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  containerCredentialFront: {
    alignItems: 'center',
    backgroundColor: '#1b396a',
    borderRadius: 10,
    padding: 10,
    width: wp('80%'),
    height: hp('70%'),
  },
  logoTecNM: {
    width: wp('30%'),
    height: hp('7%'),
    resizeMode: 'center',
    marginBottom: 15,
  },
  photo: {
    width: 80,
    height: 90,
    marginBottom: 10,
  },
  name: {
    color: '#ffffff',
    fontFamily: 'MontserratSemiBold',
    fontSize: hp('2.5%'),
    textAlign: 'center',
    marginBottom: 10,
  },
  headings: {
    color: '#ffffff80',
    textTransform: 'uppercase',
    fontFamily: 'MontserratMedium',
    fontSize: hp('1.8%'),
    marginBottom: 1,
  },
  subheadings: {
    color: '#ffffff',
    fontFamily: 'MontserratMedium',
    fontSize: hp('2.2%'),
    textAlign: 'center',
    marginBottom: 10,
  },
})
