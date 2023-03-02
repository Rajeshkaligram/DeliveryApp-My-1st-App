import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

saveDetails = [];

const SignupPage = ({navigation}) => {
  // useState for get Signup Data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [check, setCheck] = useState(false);

  // sign up data validation
  const submit = () => {
    if (fullName.length == 0 && email.length == 0 && password.length == 0) {
      Alert.alert('Please filled all the fields');
    } else {
      checkData(fullName);
    }
  };
  const checkData = e => {
    let rjx = /^[a-zA-Z" "]+$/;
    if (!rjx.test(e)) {
      Alert.alert('enter valid name');
    } else checkData1(fullName);
  };
  const checkData1 = () => {
    if (fullName.length == 0) {
      Alert.alert('Please Enter Full Name');
    } else {
      checkData2(email);
    }
  };
  const checkData2 = () => {
    if (email.length == 0) {
      Alert.alert('Please Enter valid Email Address');
    } else {
      checkData3(password);
    }
  };
  const checkData3 = () => {
    if (password.length == 0) {
      Alert.alert('Please filled in Password');
    } else saveData();
  };

  // store signup data
  const saveData = async () => {
    saveDetails.push({name: fullName, email: email, password: password});
    try {
      await AsyncStorage.setItem('SAVE', JSON.stringify(saveDetails));
      Alert.alert('Signup Successful');
      console.log(saveDetails);
      navigation.navigate('Login',{id: fullName});
    } catch (e) {}
  };

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />

      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../../assets/Image/design1.png')} />
      </View>
      <View>
        <View>
          <Text style={styles.login}>Create Account</Text>
        </View>

        <View style={styles.form}>
          <Image
            style={styles.name_logo}
            source={require('../../assets/icons/name.png')}
          />
          <TextInput
            style={styles.input_style}
            autoCapitalize="words"
            autoCorrect={false}
            placeholder="Full Name                                     "
            keyboardType="ascii-capable"
            value={fullName}
            onChangeText={newData => setFullName(newData)}
          />
        </View>

        <View style={styles.form}>
          <Image
            style={styles.emailImage}
            source={require('../../assets/icons/EmailLogo.png')}
          />
          <TextInput
            style={styles.input_style}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email                                       "
            keyboardType="email-address"
            value={email}
            onChangeText={newData => setEmail(newData)}
          />
        </View>

        <View style={styles.form}>
          <Image
            style={styles.passImage}
            source={require('../../assets/icons/Password.png')}
          />
          <TextInput
            style={styles.input_style}
            maxLength={15}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password                                    "
            textContentType="password"
            secureTextEntry={true}
            value={password}
            onChangeText={newData => setPassword(newData)}
          />
        </View>

        <View style={styles.check_box}>
          <BouncyCheckbox
            size={25}
            fillColor="#F2A51D"
            textComponent={
              <Text style={{color: '#7B7F85', paddingLeft: 10}}>
                I have read and agree to the TC
              </Text>
            }
            isChecked={check}
            onPress={() => setCheck(!check)}
          />
        </View>

        <View style={styles.button}>
          <View
            style={[
              styles.buttonStyle,
              {
                borderRadius: 20,
                backgroundColor: check ? '#F2A51D' : '#F5BC40',
              },
            ]}>
            <TouchableOpacity
              style={styles.loginButton}
              disabled={!check}
              onPress={() => submit()}>
              <Text style={styles.loginText}>SIGN UP</Text>
              <Image
                style={styles.buttonImage}
                source={require('../../assets/icons/RightArrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 68,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#7B7F85'}}>Already have a account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#F2A51D', fontWeight: '800'}}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 0,
  },
  containerLogo: {
    alignItems: 'flex-end',
  },
  login: {
    fontSize: 34,
    fontWeight: '900',
    marginTop: 3,
    marginLeft: 30,
    marginBottom: 0,
  },
  logo: {
    height: 150,
    width: 150,
  },
  form: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',

    borderBottomColor: '#CCD1DA',
    borderTopColor: '#F1F3F7',
    borderLeftColor: '#F1F3F7',
    borderRightColor: '#CCD1DA',
    borderRadius: 3,
    borderWidth: 1,
    height: 50,
    shadowColor: '#ACB0B5',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderStartWidth: 2,
  },
  input_style: {
    paddingHorizontal: 7,
    paddingVertical: 10,
    fontSize: 15,
    flex: 1,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    paddingLeft: 7,
  },
  loginButton: {
    padding: 10,
    marginRight: 12,
    width: 100,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 25,
  },
  name_logo: {
    padding: 10,
    margin: 5,
    marginLeft: 7,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  emailImage: {
    padding: 10,
    height: 31,
    width: 31,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  passImage: {
    padding: 10,
    margin: 5,
    height: 10,
    width: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginRight: 5,
  },
  buttonImage: {
    height: 17,
    width: 17,
  },
  check_box: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 30,
  },
  forgotText: {
    color: '#F2A51D',
  },
});

export default SignupPage;
