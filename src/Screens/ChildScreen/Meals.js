import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  color,
  FlatList,
} from 'react-native';
import React from 'react';
import normalize from '../../Utils/helpers/dimen';

const Meals = () => {
  const Menu = [
    {
      key: 1,
      image: require('../../assets/Image/biriyani.png'),
      name: 'Chicken Biriyani',
      price: 'RS- 210/-',
    },
    {
      key: 2,
      image: require('../../assets/Image/fryrice.png'),
      name: 'Veg FryRice',
      price: 'RS- 150/-',
    },
    {
      key: 3,
      image: require('../../assets/Image/pizza.png'),
      name: 'Veg Pizza',
      price: 'RS- 410/-',
    },
    {
      key: 4,
      image: require('../../assets/Image/pokora.png'),
      name: 'Spicy Chicken Pokora',
      price: 'RS- 250/-',
    },
    {
      key: 5,
      image: require('../../assets/Image/noodles.png'),
      name: 'Spicy Mix Noodles',
      price: 'RS- 250/-',
    },
  ];

  return (
    <View style={{marginTop: normalize(20), flex: 1}}>
      <Text
        style={{
          fontSize: normalize(20),
          fontWeight: '600',
          color: '#000000',
          marginLeft: 20,
          marginBottom: normalize(10),
        }}>
        Today's Special Offer
      </Text>
      <View>
        <View style={styles.banner}>
          <Image
            style={styles.banner_image}
            source={require('../../assets/Image/burger.jpg')}
          />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
      <View style={styles.text_container}>
        <View>
          <Text
            style={[
              styles.text,
              {fontWeight: 'bold', fontSize: normalize(14), marginLeft: 20},
            ]}>
            Popular Now
          </Text>
        </View>
        <Pressable
        // onPress={navigation.navigate('Menu')}
        >
          <Text
            style={[
              styles.text,
              {
                color: '#F1831B',
                fontSize: normalize(10),
                fontWeight: 'bold',
                marginRight: 20,
              },
            ]}>
            SEE FULL MENU {'>'}{' '}
          </Text>
        </Pressable>
      </View>

      <View style={styles.food_container}>
        <FlatList
          data={Menu}
          keyExtractor={Menu => Menu.key}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <View>
                <Image style={styles.menu_img} source={item.image} />
              </View>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          )}
        />
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
  text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(20),
  },
  text: {
    color: '#000000',
  },
  food_container: {
    marginTop: normalize(20),
  },
  menu_img: {
    height: normalize(110),
    width: normalize(115),
  },
});
