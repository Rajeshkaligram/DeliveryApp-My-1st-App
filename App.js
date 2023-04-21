import {StyleSheet} from 'react-native';
import React from 'react';
import {AuthProvider} from './src/Context/AuthContext';
import AppNav from './src/Navigators/AppNav';

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
