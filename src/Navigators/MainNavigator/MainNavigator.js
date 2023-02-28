import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Title from '../../Screens/AuthScr/TitlePage';
import Login from '../../Screens/AuthScr/LoginPage';
import Signup from '../../Screens/AuthScr/SignupPage';
import HomePage from '../../Screens/HomePage/Home';
import Profile from '../../Screens/BottomScr/Profile';
import Setting from '../../Screens/Setting/Setting';
import Menu from '../../Screens/ChildScreen/Meals';
import Favorit from '../../Screens/BottomScr/Favorits';
import Livechat from '../../Screens/BottomScr/Livechat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image} from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        tabBarActiveTintColor: '#F1831B',
        tabBarInactiveTintColor: '#7B7F85',
        tabBarHideOnKeyboard: true,
      }}>
      {/* <Tab.Screen name='HomePage12' component={MyTabs}/> */}
      <Tab.Screen
        name="Livechat"
        component={Livechat}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/icons/chat.png')}
                style={{height: 23, width: 35}}
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
                source={require('../../assets/icons/profile.png')}
                style={{height: 30, width: 30}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/icons/home.png')}
                style={{height: 30, width: 30}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/icons/menu.png')}
                style={{height: 27, width: 27}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={Favorit}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/icons/love.png')}
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
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Title" component={Title} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerLeft: null}}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomePage" component={DrawerN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
