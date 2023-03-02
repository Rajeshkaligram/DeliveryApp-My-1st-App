import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Menu from '../../Screens/BottomScr/Menu'


const Stack = createStackNavigator()
const StackNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='menu' component={Menu}/>
    </Stack.Navigator>
  )
}

export default StackNav

const styles = StyleSheet.create({})