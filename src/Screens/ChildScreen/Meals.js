import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import normalize from '../../Utils/helpers/dimen';

const Meals = ({navigation}) => {
  const Burger = [
    {
      key: 15,
      image: require('../../assets/Image/burger.jpg'),
      name: 'Yummies Special Burger',
      price: 120,
      qty: 0,
    },
  ];
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
        <FlatList
          data={Burger}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View style={styles.banner}>
              <Image style={styles.banner_image} source={item.image} />
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 15,
                    margin: normalize(5),
                    fontWeight: '500',
                    marginTop: 15,
                    color: '#000000',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{fontSize: 20, fontWeight: '600', color: '#000000'}}>
                  Now
                </Text>
                <Text
                  style={{fontSize: 20, fontWeight: '800', color: '#000000'}}>
                  {'Only ' + item.price + ' /-'}
                </Text>
                <Text style={{fontSize: 10, color: 'red'}}>(50% off)</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Burger')}
                  style={styles.cart_button}>
                  <Text
                    style={{fontSize: 15, fontWeight: '600', color: '#F1831B'}}>
                    Explore
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
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
        <Pressable onPress={() => navigation.navigate('Menu')}>
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
          keyExtractor={item => item.key}
          horizontal={true}
          // inverted={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                if (item.key == 1) {
                  navigation.navigate('ChickenBiriyani');
                } else if (item.key == 2) {
                  navigation.navigate('VegFryRice');
                } else if (item.key == 3) {
                  navigation.navigate('VegPizza');
                } else if (item.key == 4) {
                  navigation.navigate('ChickenPokora');
                } else if (item.key == 5) {
                  navigation.navigate('MixNoodles');
                } else {
                  Alert.alert('Missing Keys');
                }
              }}>
              <View style={styles.menu_container}>
                <View style={{flex: 1}}>
                  <View
                    style={{flex: 0.3, marginTop: 2, alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                      <Image
                        // resizeMode='stretch'
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
                <Text style={{color: '#000000'}}>{item.name}</Text>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: 'bold',
                    marginBottom: 7,
                  }}>
                  {'RS: ₹' + item.price + '/-'}
                </Text>
              </View>
            </TouchableOpacity>
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
    marginTop: normalize(1),
  },
  fav_button: {
    height: normalize(15),
    width: normalize(15),
  },
  menu_img: {
    height: normalize(110),
    width: normalize(110),
  },
  menu_container: {
    margin: normalize(5),
    borderColor: '#CCD1DA',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(130),
    height: normalize(150),

    shadowColor: '#645F5A',
    shadowOpacity: 0.5,
    shadowRadius: -1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
