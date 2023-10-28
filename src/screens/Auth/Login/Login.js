import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {appIcons} from '../../../assets';
import {AppButton, AppInput} from '../../../components';
import {Checkbox} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     // User logged in successfully.
  //     // Navigate to another screen (e.g., HomeScreen) after successful login.
  //     navigation.navigate('HomeScreen');
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      // userCredential();
      console.log('user credentail', userCredential);
      navigation.navigate('App', {screen: 'Feeds'});
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Log In</Text>
        </View>

        <AppInput
          onChangeText={value => setEmail(value)}
          value={email}
          lable={'Email'}
          placeholder={'Email'}
        />

        <AppInput
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
          lable={'Password'}
          placeholder={'Password'}
        />

        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <Checkbox
            color="green"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text
            style={[
              styles.plainText,
              {width: '80%', marginTop: 5, textAlign: 'left'},
            ]}>
            Keep me logged in.
          </Text>
        </View>
        <View>
          <AppButton
            name={'Login'}
            onpress={() => {
              handleLogin();
            }}
          />
        </View>
      </View>
      <View>
        <Text
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.touchableText}>
          Forgot your password?
        </Text>
      </View>
      <View style={{position: 'absolute', bottom: 25, alignSelf: 'center'}}>
        <Text style={styles.plainText}>Don't have an account?</Text>
        <Text
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={styles.touchableText}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default Login;
