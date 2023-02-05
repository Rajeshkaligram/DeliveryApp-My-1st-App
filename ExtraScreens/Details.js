
import React, { useState } from 'react';

import {
  Image,
  Button,
  onPress,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Details = ({navigation}) => {
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView>

        {/* <View style={styles.heading}>
          <TouchableOpacity onPress={()=> alert("Hello I am okay......")}>
            <Image
              style={styles.logo}
              source={require("/Users/avijit/Documents/RajeshProjectRN/FirstDemoRN/FirstProject/Image/arrow.png")} />
          </TouchableOpacity>
          <Text style={styles.headingText}>Leave Approvals</Text>
        </View> */}

        <View style={styles.container1}>
          <Text style={styles.text}>Pending leave approvals</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.text}>Leave App No :
            <Text style={styles.normalText}> 01002999889</Text>
          </Text>
          <Text style={styles.text}>Employee ID :
            <Text style={styles.normalText}> 00422883</Text>
          </Text>
          <Text style={styles.text}>Employee Name :
            <Text style={styles.normalText}> Rajesh Roy</Text>
          </Text>
          <Text style={styles.text}>Leave Type :
            <Text style={styles.normalText}> CL</Text>
          </Text>
          <Text style={styles.text}>Appliction Date :
            <Text style={styles.normalText}> 08 March 2016</Text>
          </Text>
          <View style={styles.row}>
            <Text style={styles.text}>Start Date :
              <Text style={styles.normalText}> 08 march 2016</Text>
            </Text>
            <Text style={styles.text}>End Date :
              <Text style={styles.normalText}> 10 march 2022</Text>
            </Text>
          </View>
          <View style={styles.button}>

            <TouchableOpacity style={styles.button1}
            onPress={()=>navigation.navigate('Calculator')}>
              <Text style={styles.buttonText}>Approve / Reject</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1}
              onPress={()=>navigation.navigate('MCalculator')}>
              <Text style={styles.buttonText}>Leave History</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View style={styles.container2}>
          <Text style={styles.text}>Leave App No :
            <Text style={styles.normalText}> 01002999889</Text>
          </Text>
          <Text style={styles.text}>Employee ID :
            <Text style={styles.normalText}> 00422883</Text>
          </Text>
          <Text style={styles.text}>Employee Name :
            <Text style={styles.normalText}> Rahul Roy</Text>
          </Text>
          <Text style={styles.text}>Leave Type :
            <Text style={styles.normalText}> CL</Text>
          </Text>
          <Text style={styles.text}>Appliction Date :
            <Text style={styles.normalText}> 12 March 2018</Text>
          </Text>
          <View style={styles.row}>
            <Text style={styles.text}>Start Date :
              <Text style={styles.normalText}> 12 march 2018</Text>
            </Text>
            <Text style={styles.text}>End Date :
              <Text style={styles.normalText}> 30 march 2020</Text>
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText}>Approve / Reject</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText}>Leave History</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.button2}>
          <TouchableOpacity style={styles.button1}
          onPress={() => navigation.navigate('Second')}>
            <Text style={styles.buttonText}>Next Page</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>

    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 0,
  },
  heading: {
    flexDirection: 'row',
    backgroundColor: "#1D63D6",
    paddingTop: 20,
    alignItems: 'auto',
    paddingBottom: 20,
  },
  logo: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  headingText: {
    color: '#ffffff',
    fontSize: 20,
    paddingLeft: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#66686A',
    fontSize: 13,
    padding: 4,
  },
  container1: {
    paddingTop: 25,
    paddingLeft: 10,
    paddingBottom: 4,
  },
  container2: {
    borderColor: '#66686A',
    borderWidth: 0.5,
    margin: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  normalText: {
    color: '#010202',
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  button1: {
    marginTop: 18,
    marginBottom: 5,
    backgroundColor: '#1D63D6',
    marginLeft: 0,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default Details;


