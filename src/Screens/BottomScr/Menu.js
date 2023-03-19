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
  ];
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
      <View style={styles.food_container}>
        <FlatList
          data={Menu}
          keyExtractor={item => item.key}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.menu_container}>
              <View style={{flex: 1}}>
                <View style={{flex: 0.3, marginTop: 2, alignItems: 'flex-end'}}>
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
              <Text style={{color: '#000000', fontSize: 17, fontWeight: '400'}}>{item.name}</Text>
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
  },
  fav_button: {
    height: normalize(15),
    width: normalize(15),
  },
  menu_img: {
    height: normalize(115),
    width: normalize(115),
  },
  menu_container: {
    // marginTop: normalize(15),
    margin: normalize(8),
    borderColor: '#CCD1DA',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(140),
    height: normalize(170),
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
