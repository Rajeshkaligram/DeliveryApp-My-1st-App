import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { normalize } from 'react-native-elements';

const Favorits = (props) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.main_container}>
        <Text style={styles.text}>Your Favorite Item</Text>
      </View>
      <View style={styles.food_container}>
        <FlatList
          data={props.Menu}
          keyExtractor={item => item.key}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.menu_container}>
              <View style={{flex: 1}}>
                <View style={{flex: 0.3, marginTop: 2, alignItems: 'flex-end'}}>
                  <TouchableHighlight>
                    <Image
                      // resizeMode='stretch'
                      style={styles.fav_button}
                      source={require('../../assets/icons/heart.png')}
                    />
                  </TouchableHighlight>
                </View>
                <Image
                  style={styles.menu_img}
                  source={item.image}
                  resizeMode={'contain'}
                />
              </View>
              <Text style={{color: '#000000'}}>{item.name}</Text>
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

export default Favorits;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  main_container: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#F1831B',
    height: normalize(50),
  },
  text :{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
});
