import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from '../styles/CredentialFrontStyles'

const CredentialFront = () => {
  return (
    <View style={styles.containerCredentialFront}>
      <Image style={styles.logoTecNM} resizeMode='contain' source={require('../../assets/images/logo-tecnm.png')} />
      <Image style={styles.photo} source={{ uri: 'https://i.imgur.com/U82lwer.jpg' }} />
      <Text style={styles.name}>Angel Arturo Morales Rodriguez</Text>
      <Text style={styles.headings}>Carrera</Text>
      <Text style={styles.subheadings}>Ingeniería en Sistemas Computacionales</Text>
      <Text style={styles.headings}>Control</Text>
      <Text style={styles.subheadings}>18190683</Text>
      <Text style={styles.headings}>Dirección</Text>
      <Text style={styles.subheadings}>Amistad SN, Col. Deportiva Sur, Salina Cruz Oax.</Text>
    </View>
  )
}

export default CredentialFront
