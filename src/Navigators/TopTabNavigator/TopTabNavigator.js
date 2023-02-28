import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Meals from '../../Screens/ChildScreen/Meals';
import Thali from '../../Screens/ChildScreen/Thali';
import Snacks from '../../Screens/ChildScreen/Snacks';
import Drinks from '../../Screens/ChildScreen/Drinks';

const TopTab = createMaterialTopTabNavigator();
const {width} = Dimensions.get('screen');

const MyTabBar = ({state, descriptors, navigation, position}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#CCD1DA',
              borderWidth: 1,
              paddingBottom: 5,
              backgroundColor: isFocused ? '#F1831B' : 'transparent',
              borderRadius: 10,
              height: 30,
              marginHorizontal: 8,
              marginTop: 10,
              elevation: 6,
              shadowColor: '#645F5A',
              shadowOpacity: 0.2,
              shadowRadius: 1,
              shadowOffset: {
                height: 1,
                width: 1,
              },
            }}>
            <Animated.Text style={{color: '#000000', marginTop: 6}}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// ...

<TopTab.Navigator tabBar={props => <MyTabBar {...props} />}></TopTab.Navigator>;

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Meals"
      tabBar={props => <MyTabBar {...props} />}>
      <TopTab.Screen name="Meals" component={Meals} />
      <TopTab.Screen name="Thali" component={Thali} />
      <TopTab.Screen name="Snacks" component={Snacks} />
      <TopTab.Screen name="Drinks" component={Drinks} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});
