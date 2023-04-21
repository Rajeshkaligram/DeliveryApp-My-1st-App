import React, {useContext} from 'react';
import {Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Title from '../../Screens/AuthScr/TitlePage';
// import Login from '../../Screens/AuthScr/LoginPage';
// import Signup from '../../Screens/AuthScr/SignupPage';
import HomePage from '../../Screens/HomePage/Home';
import Profile from '../../Screens/BottomScr/Profile';
import Setting from '../../Screens/Setting/Setting';
import Menu from '../../Screens/BottomScr/Menu';
import Favorit from '../../Screens/BottomScr/Favorits';
import Livechat from '../../Screens/BottomScr/Livechat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Cart from '../../Screens/CartScr/Cart';
import ChickenBiriyani from '../../Screens/MenuScr/ChickenBiriyani';
import VegFryRice from '../../Screens/MenuScr/VegFryRice';
import VegPizza from '../../Screens/MenuScr/VegPizza';
import ChickenPokora from '../../Screens/MenuScr/ChickenPokora';
import MixNoodles from '../../Screens/MenuScr/MixNoodles';
import {AuthContext} from '../../Context/AuthContext';
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

const CustomDrawerContent = ({navigation}) => {
  const {LogOut} = useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          marginTop: 30,
          marginLeft: 50,
          backgroundColor: '#F2A51D',
          height: 40,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>HOME</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          marginLeft: 50,
          backgroundColor: '#F2A51D',
          height: 40,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{marginBottom: 20, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => LogOut()}>
            <Text>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const DrawerN = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={TabBar} />
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Title" component={Title} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerLeft: null}}
        />
        <Stack.Screen name="Signup" component={Signup} /> */}
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
        {/* <Stack.Screen name="Header" component={Header} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
