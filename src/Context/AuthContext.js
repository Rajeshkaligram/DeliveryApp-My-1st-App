import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [Loading, SetLoading] = useState(false);
  const [UserToken, SetUserToken] = useState(null);
  const [userInfo, SetUserInfo] = useState({});

  const Signup = (fullName, email, password) => {
    SetLoading(true);
    axios
      .post('https://wtsacademy.dedicateddevelopers.us/api/user/signup', {
        first_name: fullName,
        last_name: fullName,
        email: email,
        password: password,
      })
      .then(response => {
        let userInfo = response.data;
        SetUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        Alert.alert(userInfo.message);
        console.log(userInfo);
      })
      .catch(err => {
        console.error(`register Error ${err}`);
      });
    SetLoading(false);
  };

  const Login = (email, password) => {
    SetLoading(true);
    axios
      .post('https://wtsacademy.dedicateddevelopers.us/api/user/signin', {
        email: email,
        password: password,
      })
      .then(response => {
        let userInfo = response.data;
        SetUserInfo(userInfo);
        SetUserToken(userInfo.token);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('UserToken', userInfo.token);
        Alert.alert(userInfo.message);
        console.log(userInfo);
      })
      .catch(err => {
        console.error(`register Error ${err}`);
      });
    SetLoading(false);
  };
  const LogOut = () => {
    SetLoading(true);
    SetUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('UserToken');
    SetLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      SetLoading(false);
      let UserToken = await AsyncStorage.getItem('UserToken');
      let UserInfo = await AsyncStorage.getItem('userInfo');
      let userInfoo = JSON.parse(UserInfo);
      if (userInfoo) {
        SetUserToken(UserToken);
        SetUserInfo(userInfo);
        console.log(userInfoo);
      }

      SetLoading(false);
    } catch (e) {
      console.log(`Loggedin In Error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        Login,
        LogOut,
        Loading,
        UserToken,
        Signup,
        userInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
