import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Title from './Screens/TitlePage';
import LoginPage from './Screens/LoginPage';
import Signup from './Screens/SignupPage';
import HomePage from './Screens/Home';



const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitle: true, headerTransparent: true, headerTitle: ''}}>
          <Stack.Screen name="Title" component={Title}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerLeft: null}} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="HomePage" component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App

