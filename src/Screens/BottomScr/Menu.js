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

const Header = ({navigation}) => {
  // const [newObject, setNewObject] = useState(null)
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
    {
      key: 6,
      image: require('../../assets/Image/sprite.png'),
      name: 'Sprite 250ml',
      price: 'RS- 60/-',
    },
    {
      key: 7,
      image: require('../../assets/Image/thali1.png'),
      name: 'Mahraja Thali',
      price: 'RS- 520/-',
      review: '⭐️⭐️⭐️⭐️',
      description:
        'Maharaja Thali is the best Thali searve with Rice, Roti, Papad, sabji, chatni with sweet',
    },
    {
      key: 8,
      image: require('../../assets/Image/thali2.png'),
      name: 'Rice Thali',
      price: 'RS- 230/-',
      review: '⭐️⭐️⭐️⭐️',
      description:
        'Rice Thali is the best Thali searve with Rice, Roti, Papad, sabji, chatni with sweet',
    },
    {
      key: 9,
      image: require('../../assets/Image/coce.png'),
      name: 'coca cola 250ml',
      price: 'RS- 60/-',
    },
    {
      key: 10,
      image: require('../../assets/Image/pepsi.png'),
      name: 'coca cola 250ml',
      price: 'RS- 60/-',
    },
    {
      key: 11,
      image: require('../../assets/Image/fanta.png'),
      name: 'Fanta 250ml',
      price: 'RS- 60/-',
    },
    {
      key: 12,
      image: require('../../assets/Image/combo.png'),
      name: 'Combo Pack',
      price: 'RS- 350/-',
    },
    {
      key: 13,
      image: require('../../assets/Image/luchi.png'),
      name: 'Luchi Alurdom Combo',
      price: 'RS- 80/-',
    },
    {
      key: 14,
      image: require('../../assets/Image/dhosa.png'),
      name: 'South Indian Dhosa',
      price: 'RS- 120/-',
    },
  ];
  return (
    <SafeAreaView style={styles.body}>
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
      <View style={styles.food_container}>
        <FlatList
          data={Menu}
          keyExtractor={item => item.key}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.menu_container}>
              <View style={{flex: 1}}>
                <View style={{flex: 0.3, marginTop: 5, alignItems: 'flex-end'}}>
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
              <Text style={{color: '#000000', fontSize: 17, fontWeight: '400'}}>
                {item.name}
              </Text>
              <Text
                style={{color: '#000000', fontWeight: 'bold', marginBottom: 7}}>
                {item.price}
              </Text>
            </View>
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
    height: normalize(180),
    backgroundColor: '#F4F5F7',
    shadowColor: '#645F5A',
    shadowOpacity: 0.5,
    shadowRadius: -1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
