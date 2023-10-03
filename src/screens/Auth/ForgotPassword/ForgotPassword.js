import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

import {appIcons} from '../../../assets';
import { AppButton, AppHeader, AppInput } from '../../../components';


const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
      <AppHeader heading={'Forgot Password'} source={appIcons.crossIcon} onpress={()=> navigation.goBack()}/>
        <Text style={styles.boldText}>Forgot your password?</Text>
        <Text style={styles.plainText}>
          No worries, we'll help you reset it.
        </Text>
        <View style={{marginTop: 30}}>
          <AppInput lable={'Email'} placeholder={'Email'} />
        </View>
        {/* <Image style={{height:50,width:50}} onPress={console.log("hello")} source={require('../../../assets/icons/cross.png')}/> */}
        <View style={{position:'absolute', bottom:30, width:'100%'}}>
        <AppButton onpress={()=>navigation.navigate('VerifyOtp')} name={'Reset Password'}/>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
