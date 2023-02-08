import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Text,
  onPress,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const MenuExample = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const [uncheck, setUncheck] = useState(false);

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <View style={styles.first_container}>
          <View style={styles.container}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.cart_icon}
                source={require('../Image/menubar.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.cart_icon}
                source={require('../Image/cart.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 1, marginLeft: 10}}>
            <View>
              <Text style={{fontSize: 20, fontWeight: '600'}}>Hello</Text>
            </View>
            <View>
              <Text style={{fontSize: 36, fontWeight: '600'}}>
                What would you like to
                <Text style={{color: '#F1831B'}}> eat?</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.second_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={[
                styles.button_style,
                {backgroundColor: check ? '#F1F3F7' : '#F1831B'},
              ]}
              onPress={() => setCheck(!check)}>
              <Text style={styles.button_text}>Meals</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button_style,
                {backgroundColor: check ? '#F1F3F7' : '#F1831B'},
              ]}
              oonPress={() => setCheck(!check)}>
              <Text style={styles.button_text}>Thali</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button_style,
                {backgroundColor: check ? '#F1F3F7' : '#F1831B'},
              ]}
              onPress={() => setCheck(!check)}>
              <Text style={styles.button_text}>Snacks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button_style,
                {backgroundColor: check ? '#F1F3F7' : '#F1831B'},
              ]}
              onPress={() => setCheck(!check)}>
              <Text style={styles.button_text}>Drinks</Text>
            </TouchableOpacity>
          </View>

          <View style={{margin: 10, marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>
              Today's Special Offer
            </Text>
          </View>

          <View>
            <View style={styles.banner}>
              <Image
                style={styles.banner_image}
                source={require('../Image/burger.jpg')}
              />
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 15,
                    margin: 7,
                    fontWeight: '500',
                    marginTop: 15,
                  }}>
                  Yummies Special Burger
                </Text>
                <Text style={{fontSize: 20, fontWeight: '600'}}>Now</Text>
                <Text style={{fontSize: 20, fontWeight: '800'}}>
                  Only 120/-
                </Text>
                <Text style={{fontSize: 10, color: 'red', margin: 1}}>
                  (50% off)
                </Text>
                <TouchableOpacity style={styles.cart_button}>
                  <Text
                    style={{fontSize: 15, fontWeight: '600', color: '#F1831B'}}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuExample;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 20,
  },
  first_container: {
    borderBottomColor: '#645F5A',
    borderBottomColor: '#CCD1DA',
    borderTopColor: '#F1F3F7',
    borderLeftColor: '#F1F3F7',
    borderRightColor: '#CCD1DA',
    borderWidth: 1,
    shadowColor: '#ACB0B5',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 1.4,
    shadowRadius: 100,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cart_icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  second_container: {},
  button_text: {
    fontSize: 16,
    fontWeight: '600',
    padding: 3,
    paddingLeft: 15,
    paddingRight: 15,
  },
  button_style: {
    // backgroundColor: '#F1831B',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#D2D9DA',
  },
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
    borderRadius: 30,
  },
  cart_button: {
    marginTop: 5,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#F1831B',
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
  },
});
