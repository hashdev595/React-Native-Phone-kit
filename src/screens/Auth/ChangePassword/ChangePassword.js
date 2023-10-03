import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../ChangePassword/styles';
import { AppButton, AppHeader, AppInput } from '../../../components';
import { appIcons } from '../../../assets';

const ChangePassword = ({navigation}) => {
  return (
    <View style={styles.mainContainer1}>
     <AppHeader heading={'Create Password'} source={appIcons.crossIcon} onpress={()=>navigation.navigate('VerifyOtp')}/>
      <Text style={styles.boldText}>Please enter a new password to secure your account.</Text>
     
      <View>
        <AppInput lable={'New Password'} placeholder={'Enter new password'}/>
        <AppInput lable={'Comfirm new password'} placeholder={'reenter new password'}/>
      </View>
      <View style={{width:'100%', position:'absolute', bottom:20, alignSelf:'center'}}>
      <AppButton onpress={()=>navigation.navigate('Login')} name={'Set new password'}/>
      </View>
      </View>
      
   
  );
};

export default ChangePassword;
