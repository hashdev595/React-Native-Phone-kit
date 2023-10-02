import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {appIcons} from '../../../assets';
import {AppButton, AppInput} from '../../../components';
import {Checkbox} from 'react-native-paper';

const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Log In</Text>
        </View>

        <AppInput lable={'Email'} placeholder={'Email'} />

        <AppInput secureTextEntry={true} lable={'Password'} placeholder={'Password'} />

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
              navigation.navigate('App', {screen: 'Feeds'});
            }}
          />
        </View>
      </View>
      <View>
        <Text onPress={()=> navigation.navigate('ForgotPassword')} style={styles.touchableText}>Forgot your password?</Text>
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
