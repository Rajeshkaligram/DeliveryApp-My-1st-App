
import React, { useState } from 'react';

import {
  Button,
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



const SecondPage = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Use of state

  const [name, setName] = useState(`Rajesh`, `React-Native`);
  const [course, setCourse] = useState(`React-Native`);

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.viewSectionOne}>

        <Text style={styles.textStyle}>{name}, The end is Over for {course}</Text>
        <Button
          color="#ffffff" backgroundColor="#B23702" title='Next Page'
          onPress={()=>navigation.navigate('Third')}>

        </Button>

        <TouchableOpacity
          color="#ffffff"
          style={styles.buttonCustom} onPress={() => { Linking.openURL(`https://www.youtube.com/`) }}>
          <Text>Click Here</Text>
        </TouchableOpacity>

        <TouchableOpacity
          color="#ffffff"
          style={styles.buttonCustom2} onPress={() => { Linking.openURL(`https://www.linkedin.com/in/rajesh-r-588219119/`) }}>
          <Text>Click Here</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  viewSectionOne: {
    flex: 1,
    backgroundColor: `#0F5846`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  textStyle: {
    color: `#ffffff`,
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: `center`,
  },
  buttonCustom: {
    backgroundColor: `#B23702`,
    color: `#ffffff`,
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
  buttonCustom2: {
    backgroundColor: `#B23702`,
    color: `#ffffff`,
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
});

export default SecondPage;


