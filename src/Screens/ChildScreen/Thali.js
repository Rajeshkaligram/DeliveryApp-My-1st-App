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

const Thali = () => {
  const ThaliMenu = [
    {
      key: 1,
      image: require('../../assets/Image/thali1.png'),
      name: 'Mahraja Thali',
      price: 520,
      review: '⭐️⭐️⭐️⭐️',
      description:
        'Maharaja Thali is the best Thali searve with Rice, Roti, Papad, sabji, chatni with sweet',
    },
    {
      key: 2,
      image: require('../../assets/Image/thali2.png'),
      name: 'Rice Thali',
      price: 230,
      review: '⭐️⭐️⭐️⭐️',
      description:
        'Rice Thali is the best Thali searve with Rice, Roti, Papad, sabji, chatni with sweet',
    },
    {
      key: 3,
      image: require('../../assets/Image/dhosa.png'),
      name: 'Dhosa with sambhar',
      price: 120,
      review: '⭐️⭐️⭐️⭐️',
      description:
        'dosa is crispy and crepe-like and is a very popular street food in India. Dosa is famous for its simple ingredients and savory',
    },
    {
      key: 4,
      image: require('../../assets/Image/luchi.png'),
      name: 'Luchi Combo',
      price: 80,
      review: '⭐️⭐️⭐️⭐️',
      description:
        'Luchi or Bengali style poori is a deep-fried flat bread made of flour or maida and aloor dum',
    },
  ];
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.text_container}>
        <Text style={styles.text}>Chose Your Thali</Text>
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

export default Thali;

const styles = StyleSheet.create({
  body: {
    flex: 1,
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
    height: normalize(180),
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
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 28,
    width: 100,
    shadowOpacity: 0.0,
    marginLeft: normalize(25),
  },
});
