import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../Components/NewRedux/CartReducers';

const Cart = ({navigation}) => {
  const AddedItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    AddedItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  // const Menu = [
  //   {
  //     key: 1,
  //     image: require('../../assets/Image/biriyani.png'),
  //     name: 'Chicken Biriyani',
  //     price: 'RS- 210/-',
  //   },
  //   {
  //     key: 2,
  //     image: require('../../assets/Image/fryrice.png'),
  //     name: 'Veg FryRice',
  //     price: 'RS- 150/-',
  //   },
  //   {
  //     key: 3,
  //     image: require('../../assets/Image/pizza.png'),
  //     name: 'Veg Pizza',
  //     price: 'RS- 410/-',
  //   },
  //   {
  //     key: 4,
  //     image: require('../../assets/Image/pokora.png'),
  //     name: 'Spicy Chicken Pokora',
  //     price: 'RS- 250/-',
  //   },
  //   {
  //     key: 5,
  //     image: require('../../assets/Image/noodles.png'),
  //     name: 'Spicy Mix Noodles',
  //     price: 'RS- 250/-',
  //   },
  //   {
  //     key: 6,
  //     image: require('../../assets/Image/sprite.png'),
  //     name: 'Sprite 250ml',
  //     price: 'RS- 60/-',
  //   },
  //   {
  //     key: 7,
  //     image: require('../../assets/Image/thali1.png'),
  //     name: 'Mahraja Thali',
  //     price: 'RS- 520/-',
  //     description:
  //       'Maharaja Thali is the best Thali searve with Rice, Roti, Papad, sabji, chatni with sweet',
  //   },
  //   {
  //     key: 8,
  //     image: require('../../assets/Image/thali2.png'),
  //     name: 'Rice Thali',
  //     price: 'RS- 230/-',
  //     description:
  //       'Rice Thali is the best Thali searve with Rice, Roti, Papad, sabji, chatni with sweet',
  //   },
  //   {
  //     key: 9,
  //     image: require('../../assets/Image/coce.png'),
  //     name: 'coca cola 250ml',
  //     price: 'RS- 60/-',
  //   },
  //   {
  //     key: 10,
  //     image: require('../../assets/Image/pepsi.png'),
  //     name: 'coca cola 250ml',
  //     price: 'RS- 60/-',
  //   },
  //   {
  //     key: 11,
  //     image: require('../../assets/Image/fanta.png'),
  //     name: 'Fanta 250ml',
  //     price: 'RS- 60/-',
  //   },
  //   {
  //     key: 12,
  //     image: require('../../assets/Image/combo.png'),
  //     name: 'Combo Pack',
  //     price: 'RS- 350/-',
  //   },
  //   {
  //     key: 13,
  //     image: require('../../assets/Image/luchi.png'),
  //     name: 'Luchi Alurdom Combo',
  //     price: 'RS- 80/-',
  //   },
  //   {
  //     key: 14,
  //     image: require('../../assets/Image/dhosa.png'),
  //     name: 'South Indian Dhosa',
  //     price: 'RS- 120/-',
  //   },
  // ];

  const removeItemFromCart = index => {
    dispatch(removeFromCart(index));
  };
  const decrease = item => {
    dispatch(decrementQuantity(item));
  };
  const increase = item => {
    dispatch(incrementQuantity(item));
  };
  return (
    <SafeAreaView style={styles.body}>
      {/* <View style={{}}> */}
      <View style={styles.food_container}>
        <FlatList
          data={AddedItems}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ScrollView>
              {/* <TouchableOpacity key={index.toString()}> */}
              <View style={styles.menu_container}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={styles.menu_img}
                    source={item.image}
                    resizeMode={'contain'}
                  />
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 13,
                      fontWeight: 'bold',
                      width: 100,
                      marginLeft: 10,
                    }}>
                    {item.name}
                  </Text>
                  <View style={styles.inc_button}>
                    <TouchableOpacity onPress={() => decrease(item)}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: '#ffffff',
                          fontWeight: 'bold',
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        paddingLeft: 9,
                        paddingRight: 9,
                        fontSize: 15,
                        color: '#ffffff',
                        fontWeight: 'bold',
                      }}>
                      {item.qty}
                    </Text>
                    <TouchableOpacity onPress={() => increase(item)}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: 'bold',
                          color: '#ffffff',
                          fontWeight: 'bold',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      marginLeft: 25,
                    }}>
                    {'₹' + item.price}
                  </Text>
                  <TouchableOpacity
                    style={styles.cart_button}
                    onPress={() => removeItemFromCart(item)}>
                    <Image
                      style={styles.cart_icon}
                      source={require('../../assets/icons/close.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* </TouchableOpacity> */}
            </ScrollView>
          )}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.text_container}>
          <View>
            <Text style={styles.text}>Total Price:</Text>
          </View>
          <View>
            <Text style={styles.text}>{'₹' + getTotal() + ' /-'}</Text>
            <Text style={{color: '#645F5A', fontSize: 11}}>
              Delivery fee not included
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button_add_item}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.button_text_add}>Add More Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </View> */}
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
    height: '30%',
    backgroundColor: '#ffffff',
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
    marginTop: normalize(15),
    marginLeft: normalize(15),
    marginRight: normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button_add_item: {
    borderColor: '#F1831B',
    borderWidth: 3,
    alignItems: 'center',
    height: normalize(35),
    width: normalize(200),
    justifyContent: 'center',
    borderRadius: normalize(12),
    marginTop: normalize(20),
  },
  button: {
    backgroundColor: '#F1831B',
    alignItems: 'center',
    height: normalize(35),
    width: normalize(200),
    justifyContent: 'center',
    borderRadius: normalize(12),
    marginTop: normalize(10),
  },
  button_text_add: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F1831B',
  },
  button_text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  food_container: {
    alignItems: 'center',
    backgroundColor: '#E4E6E8',
    height: '70%',
  },
  menu_img: {
    height: normalize(45),
    width: normalize(45),
  },
  menu_container: {
    justifyContent: 'center',
    margin: normalize(8),
    borderColor: '#CCD1DA',
    borderWidth: 1,
    borderRadius: 15,
    width: normalize(300),
    height: normalize(60),
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
    flex: 1,
    // marginVertical: -70,
    marginRight: 7,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  cart_icon: {
    height: 16,
    width: 16,
  },
  button_text: {
    padding: 5,
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
  },
  inc_button: {
    backgroundColor: '#F1831B',
    flexDirection: 'row',
    height: 25,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 20,
  },
});
