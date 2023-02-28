import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Meals = () => {
  return (
    <View style={{marginTop: 20}}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#000000',
            marginLeft: 20,
            marginBottom: 10,
          }}>
          Today's Special Offer
        </Text>
      </View>
      <View>
        <View style={styles.banner}>
          <Image
            style={styles.banner_image}
            source={require('../../assets/Image/burger.jpg')}
          />
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                margin: normalize(5),
                fontWeight: '500',
                marginTop: 15,
                color: '#000000',
              }}>
              Yummies Special Burger
            </Text>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#000000'}}>
              Now
            </Text>
            <Text style={{fontSize: 20, fontWeight: '800', color: '#000000'}}>
              Only 120/-
            </Text>
            <Text style={{fontSize: 10, color: 'red'}}>(50% off)</Text>
            <TouchableOpacity style={styles.cart_button}>
              <Text style={{fontSize: 15, fontWeight: '600', color: '#F1831B'}}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    borderColor: '#D2D9DA',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  banner_image: {
    height: 150,
    width: 150,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  cart_button: {
    marginTop: normalize(5),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#F1831B',
    width: normalize(80),
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(25),
    marginBottom: normalize(3),
  },
});
