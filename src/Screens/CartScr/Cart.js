import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Cart = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.text_container}>
          <View>
            <Text style={styles.text}>Total Price</Text>
          </View>
          <View>
            <Text>hi</Text>
            <Text style={{color: '#645F5A', fontSize: 11}}>
              Delivery fee not included
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: normalize(80),
  },
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
    marginTop: normalize(390),
    borderTopLeftRadius: normalize(25),
    borderTopRightRadius: normalize(25),
    borderBottomColor: '#645F5A',
    borderBottomColor: '#CCD1DA',
    borderTopColor: '#F1F3F7',
    borderLeftColor: '#F1F3F7',
    borderRightColor: '#CCD1DA',
    borderWidth: 1,
    shadowColor: '#ACB0B5',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 1.4,
    shadowRadius: 2,
  },
  text_container: {
    marginTop: normalize(20),
    marginLeft: normalize(15),
    marginRight: normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F1831B',
    alignItems: 'center',
    height: normalize(35),
    width: normalize(200),
    justifyContent: 'center',
    borderRadius: normalize(12),
    marginTop: normalize(40),
  },
  button_text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
