import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Title from './Screens/TitlePage';
import LoginPage from './Screens/LoginPage';
import Signup from './Screens/SignupPage';
import HomePage from './Screens/Home';
import Profile from './Screens/Profile';
import Setting from './Screens/Setting';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image} from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        tabBarActiveTintColor: '#F1831B',
        tabBarInactiveTintColor: '#7B7F85',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('./Image/profile.png')}
                style={{height: 30, width: 30}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('./Image/home.png')}
                style={{height: 23, width: 23}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerN = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={TabBar} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Title" component={Title} />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerLeft: null}}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomePage" component={DrawerN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
