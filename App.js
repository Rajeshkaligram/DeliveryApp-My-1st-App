import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigator from './src/Navigators/MainNavigator/MainNavigator';
import {Provider} from 'react-redux';
import MyStore from './src/Components/NewRedux/store';

const App = () => {
  return (
    <Provider store={MyStore}>
      <MainNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
