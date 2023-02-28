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
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // validation login data
  const validate = () => {
    if (email.length == 0 && password.length == 0) {
      Alert.alert('Please enter email and password');
    } else checkEmail();
  };
  const checkEmail = () => {
    if (email.length == 0 && email !== undefined) {
      Alert.alert('Please enter email');
    } else checkPassword();
  };
  const checkPassword = () => {
    if (password.length == 0) {
      Alert.alert('Please enter password');
    } else getDataSync();
  };
  // import async storage
  const getDataSync = async () => {
    const signupData = JSON.parse(await AsyncStorage.getItem('SAVE'));

    // matching signup data with login data
    if (
      signupData.some(item => item.email === email) &&
      signupData.some(item => item.password === password)
    ) {
      navigation.navigate('HomePage');
    } else Alert.alert('Please enter Valid email and Password');
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
          <Text style={styles.login}>Login</Text>
          <Text style={styles.details}>Please sign in to continue</Text>
        </View>

        <View style={styles.form}>
          <Image
            style={styles.Email_Image}
            source={require('../../assets/icons/EmailLogo.png')}
          />
          <TextInput
            style={styles.input_style}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email                             "
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
            placeholder="Password                           "
            textContentType="password"
            secureTextEntry={true}
            value={password}
            onChangeText={newData => setPassword(newData)}
          />

          <View style={styles.forgotButton}>
            <TouchableOpacity>
              {/* // onPress={() => navigation.navigate('Calculator')} */}
              <Text style={styles.forgotText}>FORGOT</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => validate()}>
            <Text style={styles.loginText}>LOGIN</Text>
            <Image
              style={styles.buttonImage}
              source={require('../../assets/icons/RightArrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 120,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#7B7F85'}}>Don't have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: '#F2A51D', fontWeight: '800'}}>Sign up</Text>
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
    marginBottom: 10,
    color: '#000000',
  },
  logo: {
    height: 150,
    width: 150,
  },
  details: {
    color: '#7B7F85',
    fontSize: 18,
    marginLeft: 30,
    fontWeight: '600',
    color: '#000000',
  },
  form: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 45,
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
    color: '#000000',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    paddingLeft: 2,
  },
  loginButton: {
    backgroundColor: '#F2A51D',
    borderRadius: 20,
    padding: 10,
    width: 90,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 25,
  },
  Email_Image: {
    padding: 10,
    height: 32,
    width: 32,
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
  forgotButton: {
    alignItems: 'flex-end',
    marginRight: 15,
    flex: 1,
  },
  forgotText: {
    color: '#F2A51D',
  },
});

export default LoginPage;
