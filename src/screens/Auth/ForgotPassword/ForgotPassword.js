import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

import {appIcons} from '../../../assets';
import { AppButton, AppInput } from '../../../components';


const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
         <Image  style={styles.imageStyle} source={appIcons.crossIcon} />
          </TouchableOpacity>
           <Text style={styles.headerText}>Change Password</Text>
        </View>
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
