import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {normalize} from 'react-native-elements';

const ChickenBiriyani = ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.goBack(null)}>
            <Image
              style={styles.icon_back}
              source={require('../../assets/icons/back.png')}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/cart.png')}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.main_container}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.menu_image}
              source={require('../../assets/Image/biriyani.png')}
            />
          </View>
          <View style={styles.details_container}>
            <View style={styles.text_container}>
              <Text style={styles.text1}>Chicken Biriyani </Text>
              <Text>⭐️⭐️⭐️⭐️(23 rating)</Text>
              <Text style={styles.text1}>RS- 210/-</Text>
              <View style={{marginTop: 15}}>
                <Text style={styles.text1}>Description</Text>
              </View>
              <Text style={styles.text2}>
                Chicken Biryani is a savory chicken and rice dish that includes
                layers of chicken, rice, and aromatics that are steamed
                together. The bottom layer of rice absorbs all the chicken
                juices as it cooks, giving it a tender texture and rich flavor,
                while the top layer of rice turns out white and fluffy. Buried
                in the Biryani, you’ll find whole cuts of succulent chicken
                bursting with flavor from the potent array of spices, herbs, and
                aromatics it’s marinated in.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.cart_container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 12}}>
            <Text style={styles.total_text}>Total: 210 /-</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.cart_button}
              onPress={() => alert('hi')}>
              <Image
                style={styles.cart_img}
                source={require('../../assets/icons/whitecart.png')}
              />
              <Text style={styles.cart_text}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChickenBiriyani;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  icon_back: {
    height: 37,
    width: 37,
    marginRight: 10,
  },
  main_container: {
    backgroundColor: '#E4E6E8',
    flex: 1,
  },
  menu_image: {
    height: normalize(300),
    width: normalize(300),
  },
  details_container: {
    flex: 1,
    backgroundColor: '#EDEEEF',
  },
  text_container: {
    marginTop: 15,
    marginLeft: 15,
  },
  text1: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    margin: 5,
  },
  text2: {
    fontWeight: '400',
    width: normalize(345),
  },
  cart_container: {
    height: 100,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#645F5A',
    shadowOpacity: 0.5,
    shadowRadius: -1,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  cart_img: {
    height: 40,
    width: 40,
  },
  cart_button: {
    backgroundColor: '#F1831B',
    height: 50,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cart_text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    marginHorizontal: 40,
  },
  total_text: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
