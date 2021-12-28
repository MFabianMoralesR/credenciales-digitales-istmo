import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import Home from '../screens/Home'
import Credential from '../screens/Credential'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator()

const screenOptions = (route, color) => {
  let iconName

  if (route.name === 'home') {
    iconName = 'home'
  } else if (route.name === 'credential') {
    iconName = 'idcard'
  } else if (route.name === 'account') {
    iconName = 'user'
  }

  return <AntDesign name={iconName} size={22} color={color} />
}

const NavigationBottom = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='home'
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptions(route, color),
          tabBarStyle: {
            backgroundColor: '#1b396a',
            height: 70,
            paddingBottom: 15,
            paddingTop: 10,
          },
          tabBarActiveTintColor: '#ff8000',
          tabBarInactiveTintColor: '#ffffff',
        })}
      >
        <Tab.Screen
          name='home'
          component={Home}
          options={{
            title: 'Inicio',
            headerShown: false,
            tabBarLabelStyle: {fontFamily: 'MontserratMedium', fontSize: 11}
          }}
        />
        <Tab.Screen
          name='credential'
          component={Credential}
          options={{
            title: 'Mi Credencial',
            headerShown: false,
            tabBarLabelStyle: {fontFamily: 'MontserratMedium', fontSize: 11}
          }}
        />
        <Tab.Screen
          name='account'
          component={Account}
          options={{
            title: 'Mi Cuenta',
            headerShown: false,
            tabBarLabelStyle: {fontFamily: 'MontserratMedium', fontSize: 11}
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavigationBottom
