import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import {normalize} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
} from '../../Components/NewRedux/CartReducers';

const Header = ({navigation}) => {
  const AddedItems = useSelector(state => state);
  // console.log(AddedItems);
  const dispatch = useDispatch();

  const Menu = [
    {
      key: 1,
      image: require('../../assets/Image/biriyani.png'),
      name: 'Chicken Biriyani',
      price: 210,
      qty: 0,
    },
    {
      key: 2,
      image: require('../../assets/Image/fryrice.png'),
      name: 'Veg FryRice',
      price: 150,
      qty: 0,
    },
    {
      key: 3,
      image: require('../../assets/Image/pizza.png'),
      name: 'Veg Pizza',
      price: 410,
      qty: 0,
    },
    {
      key: 4,
      image: require('../../assets/Image/pokora.png'),
      name: 'Chicken Pokora',
      price: 250,
      qty: 0,
    },
    {
      key: 5,
      image: require('../../assets/Image/noodles.png'),
      name: 'Mix Noodles',
      price: 250,
      qty: 0,
    },
    {
      key: 6,
      image: require('../../assets/Image/sprite.png'),
      name: 'Sprite 250ml',
      price: 60,
      qty: 0,
    },
    {
      key: 7,
      image: require('../../assets/Image/thali1.png'),
      name: 'Mahraja Thali',
      price: 520,
      qty: 0,
    },
    {
      key: 8,
      image: require('../../assets/Image/thali2.png'),
      name: 'Rice Thali',
      price: 230,
      qty: 0,
    },
    {
      key: 9,
      image: require('../../assets/Image/coce.png'),
      name: 'coca cola 250ml',
      price: 60,
      qty: 0,
    },
    {
      key: 10,
      image: require('../../assets/Image/pepsi.png'),
      name: 'Pepsi 250ml',
      price: 60,
      qty: 0,
    },
    {
      key: 11,
      image: require('../../assets/Image/fanta.png'),
      name: 'Fanta 250ml',
      price: 60,
      qty: 0,
    },
    {
      key: 12,
      image: require('../../assets/Image/combo.png'),
      name: 'Combo Pack',
      price: 350,
      qty: 0,
    },
    {
      key: 13,
      image: require('../../assets/Image/luchi.png'),
      name: 'Luchi Combo',
      price: 80,
      qty: 0,
    },
    {
      key: 14,
      image: require('../../assets/Image/dhosa.png'),
      name: 'Masala Dhosa',
      price: 120,
      qty: 0,
    },
    {
      key: 15,
      image: require('../../assets/Image/burger2.png'),
      name: 'Yummies Special Burger',
      price: 120,
      qty: 0,
    },
    {
      key: 16,
      image: require('../../assets/Image/popcorn.png'),
      name: 'Chicken Popcorn',
      price: 230,
      qty: 0,
    },
  ];

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = index => {
    dispatch(removeFromCart(index));
  };
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('HomePage')}>
          <Image
            style={styles.icon_back}
            source={require('../../assets/icons/back.png')}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.text}>Our Menu</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={{flexDirection: 'row'}}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/cart.png')}
            resizeMode="stretch"
          />
          <Text
            style={{
              marginRight: 10,
              marginTop: 9,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#F80505',
            }}>
            {AddedItems.cart.length}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.food_container}>
        <FlatList
          data={Menu}
          keyExtractor={item => item.key}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPressIn={() => {
                if (item.key === 1) {
                  navigation.navigate('ChickenBiriyani');
                } else if (item.key === 2) {
                  navigation.navigate('VegFryRice');
                } else if (item.key === 3) {
                  navigation.navigate('VegPizza');
                } else if (item.key === 4) {
                  navigation.navigate('ChickenPokora');
                } else if (item.key === 5) {
                  navigation.navigate('MixNoodles');
                }
              }}
              key={index.toString()}>
              <View style={styles.menu_container}>
                <View style={{flex: 1}}>
                  <View
                    style={{flex: 0.3, marginTop: 5, alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                      <Image
                        // resizeMode="stretch"
                        style={styles.fav_button}
                        source={require('../../assets/icons/heart.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={styles.menu_img}
                    source={item.image}
                    resizeMode={'contain'}
                  />
                </View>
                <Text
                  style={{color: '#000000', fontSize: 17, fontWeight: '400'}}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: 'bold',
                    marginBottom: 7,
                  }}>
                  {'₹' + item.price}
                </Text>
                {AddedItems.cart.find(value => value.key == item.key) ? (
                  <TouchableOpacity
                    style={styles.cart_button}
                    onPress={() => removeItemFromCart(item)}>
                    <Text style={styles.button_text}>Remove From Cart</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.cart_button}
                    onPress={() => addItemToCart(item)}>
                    <Text style={styles.button_text}>Add To Cart</Text>
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginBottom: normalize(115),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 40,
    width: 40,
  },
  icon_back: {
    height: 37,
    width: 37,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  food_container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#E4E6E8',
    marginTop: normalize(20),
  },
  fav_button: {
    height: normalize(15),
    width: normalize(15),
  },
  menu_img: {
    height: normalize(125),
    width: normalize(125),
  },
  menu_container: {
    // marginTop: normalize(15),
    margin: normalize(8),
    borderColor: '#CCD1DA',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(170),
    height: normalize(210),
    backgroundColor: '#F4F5F7',
    shadowColor: '#645F5A',
    shadowOpacity: 0.5,
    shadowRadius: -1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cart_button: {
    backgroundColor: '#F1831B',
    borderRadius: 10,
    marginBottom: 10,
    width: normalize(150),
    height: normalize(30),
    alignItems: 'center',
  },
  button_text: {
    padding: 5,
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },
});
