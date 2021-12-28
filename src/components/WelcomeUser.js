import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../styles/WelcomeUserStyles'

const WelcomeUser = () => {
  return (
    <View style={styles.containerWelcome}>
      <Text style={styles.welcome}>Bienvedid@ a la Credencial Digital del TecNM Campus Istmo</Text>
      <Text style={styles.rol}>Alumno</Text>
      <Text style={styles.student}>Hector Manuel Santos Bautista</Text>
    </View>
  )
}

export default WelcomeUser
