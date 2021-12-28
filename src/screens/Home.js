import React from 'react'
import { StatusBar, View } from 'react-native'

import BannerHome from '../components/BannerHome'
import WelcomeUser from '../components/WelcomeUser'
import { styles } from '../styles/HomeStyles'

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#1b396a' />
      <BannerHome />
      <WelcomeUser />
    </View>
  )
}

export default Home
