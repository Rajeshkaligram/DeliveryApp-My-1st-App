import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import TopTabNavigator from '../../Navigators/TopTabNavigator/TopTabNavigator';
import {Font} from '../../Utils/Theme/Font';

const MenuExample = ({navigation}) => {
  // const route = useRoute();
  // const fullName = route.params?.id;
  return (
    <SafeAreaView
      style={[
        styles.body,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1}}>
        <View style={styles.first_container}>
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
            <TouchableOpacity>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/cart.png')}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 1, marginLeft: 10}}>
            <View>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#000000'}}>
                Hello
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 36, fontWeight: '600', color: '#000000'}}>
                What would you like to
                <Text style={{color: '#F1831B'}}> eat?</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 3}}>
        <TopTabNavigator />
      </View>
    </SafeAreaView>
  );
};

export default MenuExample;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 20,
  },
  first_container: {
    flex: 1,
    borderBottomColor: '#645F5A',
    borderBottomColor: '#CCD1DA',
    borderTopColor: '#F1F3F7',
    borderLeftColor: '#F1F3F7',
    borderRightColor: '#CCD1DA',
    borderWidth: 1,
    shadowColor: '#ACB0B5',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 1.4,
    shadowRadius: 100,
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
});
