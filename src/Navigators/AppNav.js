import {ActivityIndicator, StyleSheet, View} from 'react-native';
import MainNavigator from './MainNavigator/MainNavigator';
import {Provider} from 'react-redux';
import MyStore from '../Components/NewRedux/store';
import React, {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import AppStack from './AppStack/AppStack';

const AppNav = () => {
  const {Loading, UserToken} = useContext(AuthContext);
  if (Loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <Provider store={MyStore}>
      {UserToken == null ? <MainNavigator /> : <AppStack />}
    </Provider>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
