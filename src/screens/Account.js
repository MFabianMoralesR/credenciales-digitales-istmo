import React from 'react'
import { View, Text } from 'react-native'

import ProfileUser from '../components/ProfileUser'
import ButtonLogout from '../components/ButtonLogout'
import { styles } from '../styles/AccountStyles'

const Account = () => {
  return (
    <View style={styles.container}>
      <ProfileUser />
      <ButtonLogout />
    </View>
  )
}

export default Account
