import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from '../styles/CredentialBackStyles'

const CredentialBack = () => {
  return (
    <View style={styles.containerCredentialBack}>
      <Image style={styles.logoSep} resizeMode='contain' source={require('../../assets/images/logo-sep.png')} />
      <Image style={styles.logoTecIstmo} resizeMode='contain' source={require('../../assets/images/logo-iti.png')} />
      <Text style={styles.campus}>IT Istmo</Text>
      <Text style={styles.headings}>Vigencia</Text>
      <Text style={styles.subheadings}>ENE - JUL 2022</Text>
    </View>
  )
}

export default CredentialBack
