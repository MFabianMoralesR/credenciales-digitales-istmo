import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from '../styles/BannerHomeStyles'

const BannerHome = () => {
  return (
    <View style={styles.containerBanner}>
      <Text style={styles.textBanner}>Credencial Digital TecNM</Text>
      <Image style={styles.imageBanner} resizeMode='contain' source={require('../../assets/images/logo-tecnm.png')} />
    </View>
  )
}

export default BannerHome
