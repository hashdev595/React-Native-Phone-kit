import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

//** styles */
import {styles} from './styles';

//** firebase */
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

//** third party library */
import {Checkbox} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

//** component */
import {AppButton, AppInput} from '../../../components';

const SignUp = ({navigation}) => {
  //** state */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMessage, seterrMessage] = useState('');

  //** handle Sign Up */
  const handleSignup = async () => {
    if (!email || !password || !name) {
      seterrMessage('enter email and password');
    } else {
      setLoading(true);
      try {
        await auth()
          .createUserWithEmailAndPassword(email, password)
          .then(userCredential => {
            const user = userCredential.user;
            const userRef = database().ref('Users');

            const userUid = user.uid;

            userRef.child(user.uid).set({
              name,
              email,
              userUid,
            });

            const userKey = database().ref('User').child(user.uid).key;
            console.log('userKey', userKey);
            // Clear input fields
            setEmail('');
            setPassword('');
            setName('');
            setLoading(false);
            navigation.navigate('Login');
          });
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        seterrMessage(error.message);
      }
    }
  };

  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
        <View style={styles.headerContainer}>
          <View style={{width: '15%'}}></View>
          <View style={{width: '70%'}}>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>
          <View style={{width: '15%', justifyContent: 'center'}}>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.touchableText}>
              Login
            </Text>
          </View>
        </View>
        <AppInput
          lable={'Name'}
          placeholder={'Name'}
          onChangeText={text => {
            setName(text);
          }}
          value={name}
        />
        <AppInput
          onChangeText={value => setEmail(value)}
          value={email}
          lable={'Email'}
          placeholder={'Email'}
        />
        <AppInput
          onChangeText={value => setPassword(value)}
          value={password}
          lable={'Password'}
          placeholder={'Password'}
        />
        <Text style={{color: 'red'}}>{errMessage}</Text>
        {loading && <ActivityIndicator size="large" color="#5DB075" />}
        <View style={{marginTop: 15, flexDirection: 'row'}}>
          <Checkbox
            color="green"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={[styles.regularText, {width: '80%'}]}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
        <View>
          <AppButton onpress={handleSignup} name={'Sign Up'} />
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 25, alignSelf: 'center'}}>
        <Text style={styles.regularText}>Already have an account?</Text>
        <Text
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.touchableText}>
          Login
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
