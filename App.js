import React from 'react'
import { useFonts } from 'expo-font'

import NavigationBottom from './src/router/NavigationBottom'

const App = () => {
  const [loaded] = useFonts({
    MontserratRegular: require('./assets/fonts/Montserrat-400.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-500.ttf'),
    MontserratSemiBold: require('./assets/fonts/Montserrat-600.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-700.ttf'),
  })

  if (!loaded) return null

  return (
    <NavigationBottom />
  )
}

export default App
