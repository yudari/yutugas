import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HalamanAwal from '../screens/HalamanAwal'

export default function SplashRoutes() {
    const {Navigator, Screen} = createStackNavigator()
  return (
   <Navigator initialRouteName='HalamanAwal'>
    <Screen name="HalamanAwal" component={HalamanAwal} options={{headerShown: false}} />
   </Navigator>
  )
}
