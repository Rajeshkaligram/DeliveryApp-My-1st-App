import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Title from '../../Screens/AuthScr/TitlePage';
import Login from '../../Screens/AuthScr/LoginPage';
import Signup from '../../Screens/AuthScr/SignupPage';
import HomePage from '../../Screens/HomePage/Home';
import Profile from '../../Screens/BottomScr/Profile';
import Setting from '../../Screens/Setting/Setting';
import Menu from '../../Screens/BottomScr/Menu';
import Favorit from '../../Screens/BottomScr/Favorits';
import Livechat from '../../Screens/BottomScr/Livechat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image} from 'react-native';
import Cart from '../../Screens/CartScr/Cart';
import ChickenBiriyani from '../../Screens/MenuScr/ChickenBiriyani';
import VegFryRice from '../../Screens/MenuScr/VegFryRice';
import VegPizza from '../../Screens/MenuScr/VegPizza';
import ChickenPokora from '../../Screens/MenuScr/ChickenPokora';
import MixNoodles from '../../Screens/MenuScr/MixNoodles';
import Burger from '../../Screens/ChildScreen/Burger'
// import Header from '../../Components/Header';

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
      <Tab.Screen
        name="Livechat"
        component={Livechat}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/icons/chat.png')}
                style={{height: 30, width: 45}}
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
                style={{height: 38, width: 35}}
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
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/icons/menu.png')}
                style={{height: 30, width: 27}}
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
                style={{height: 28, width: 30}}
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
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitle: 'Your Order',
            headerTitleStyle: {fontSize: 20},
            headerTransparent: true,
          }}
        />
        <Stack.Screen name="ChickenBiriyani" component={ChickenBiriyani} />
        <Stack.Screen name="VegFryRice" component={VegFryRice} />
        <Stack.Screen name="VegPizza" component={VegPizza} />
        <Stack.Screen name="ChickenPokora" component={ChickenPokora} />
        <Stack.Screen name="MixNoodles" component={MixNoodles} />
        <Stack.Screen name="Burger" component={Burger} />
        {/* <Stack.Screen name="Header" component={Header} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
