import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  VirtualizedList,
} from 'react-native';
import React from 'react';
import {normalize} from 'react-native-elements';

const Snacks = () => {
  const ThaliMenu = [
    {
      key: 1,
      image: require('../../assets/Image/pokora.png'),
      name: 'Chicken Pakora',
      price: 'RS- 140/-',
      review: '⭐️⭐️⭐️',
      description:
        'Chicken pakora is a beautifully spiced, The real crispness come from rice flour. And, it is tender, juicy and oh so flavourful within.',
    },
    {
      key: 2,
      image: require('../../assets/Image/pizza.png'),
      name: 'Veg Pizza',
      price: 'RS- 510/-',
      review: '⭐️⭐️⭐️⭐️',
      description:
        'This pizza recipe is made with the combination of vegetables like broccoli, onion, capsicum, carrot, mushroom and cauliflower',
    },
    {
      key: 3,
      image: require('../../assets/Image/popcorn.png'),
      name: 'Chicken Popcorn',
      price: 'RS- 230/-',
      review: '⭐️⭐️⭐️⭐️',
      description:
        'Popcorn chicken are bite-sized tender and crisp chunks of chicken that have been seasoned.',
    },
    {
      key: 4,
      image: require('../../assets/Image/combo.png'),
      name: 'Combo Pack',
      price: 'RS- 350/-',
      review: '⭐️⭐️⭐️⭐️',
      description:
        'Burger: Minced flavoured chicken patty deep fried and dressed. French Fries: A cut of Julienne potatoes deep fried',
    },
  ];
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.text_container}>
        <Text style={styles.text}>Chose Your Snacks</Text>
      </View>
      <View style={{marginBottom: normalize(70)}}>
        <FlatList
          data={ThaliMenu}
          alwaysBounceVertical={true}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View style={styles.menu_container}>
              <View style={{alignItems: 'flex-start'}}>
                <Image
                  style={styles.menu_img}
                  source={item.image}
                  resizeMode={'contain'}
                />
                <View style={styles.button}>
                  <TouchableOpacity>
                    <Text style={{color: '#F1831B', fontSize: 15}}>
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginBottom: normalize(10),
                  flex: 1,
                }}>
                <View style={{alignItems: 'flex-start', marginTop: 5}}>
                  <Text
                    style={{
                      color: '#F1831B',
                      fontSize: 20,
                      fontWeight: '500',
                    }}>
                    {item.name}
                  </Text>
                  <View>
                    <Text
                      style={{
                        marginRight: 4,
                        marginTop: 10,
                        marginBottom: 10,
                      }}>
                      {item.description}
                    </Text>
                  </View>
                  <Text>{item.review}</Text>
                  <Text
                    style={{
                      color: '#000000',
                      fontWeight: 'bold',
                      marginBottom: 7,
                      marginTop: 10,
                    }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Snacks;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginBottom: 10,
  },
  text_container: {
    marginTop: normalize(10),
    marginLeft: normalize(20),
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  menu_img: {
    height: normalize(140),
    width: normalize(150),
  },
  menu_container: {
    flex: 1,
    margin: normalize(5),
    borderColor: '#CCD1DA',
    borderWidth: 1,
    borderRadius: 15,
    width: normalize(370),
    height: normalize(188),
    flexDirection: 'row',
    shadowColor: '#645F5A',
    shadowOpacity: 0.5,
    shadowRadius: -1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  button: {
    borderColor: '#F1831B',
    margin: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 28,
    width: 100,
    shadowOpacity: 0.0,
    marginLeft: normalize(25),
    marginBottom: normalize(10),
  },
});
