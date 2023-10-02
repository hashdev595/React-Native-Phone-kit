import {View, Text,  TextInput, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { AppButton, AppHeader } from '../../../components';
import { appIcons, appImages } from '../../../assets';


const VerifyOtp = ({navigation}) => {
  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
      <AppHeader onpress={()=> navigation.goBack()}  source={appIcons.crossIcon} heading={'Verify OTP'} rightlable={'filter'}/>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Image style={{width:'30%', height:100, resizeMode:'contain'}} source={appImages.personImage}  />
        </View>
        <Text style={styles.boldText}>OTP Verification</Text>
        <Text style={styles.plainText}>Enter OTP code sent to </Text>
      <View style={styles.otpContainer}>
        <TextInput style={styles.inputStyle}/>
        <TextInput style={styles.inputStyle}/>
        <TextInput style={styles.inputStyle}/>
        <TextInput style={styles.inputStyle}/>
      </View>
      <View style={{width:'100%', position:'absolute', bottom:20}}>
      <AppButton onpress={()=> navigation.navigate('ChangePassword')} name={'Verify OTP'}/>
      </View>
      </View>
    </View>
  );
};

export default VerifyOtp;
