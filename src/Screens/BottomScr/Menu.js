import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
} from 'react-native';
import React from 'react';

const Header = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/menubar.png')}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.text}>Our Menu</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/cart.png')}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
