import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import { AppButton, AppInput } from '../../../components';
import { Checkbox } from 'react-native-paper';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.mainContainer1}>
      <View style={styles.mainContainer2}>
      <View style={styles.headerContainer}>
          <View style={{width: '15%'}}></View>
          <View style={{width: '70%'}}>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>
          <View style={{width: '15%', justifyContent:'center'}}>
            <Text style={styles.touchableText}>Login</Text>
          </View>
        </View>
      <AppInput lable={'Name'} placeholder={'Name'}/>
      <AppInput lable={'Email'} placeholder={'Email'} />
      <AppInput lable={'Password'} placeholder={'Password'} />
      <View style={{marginTop:15, flexDirection:'row'}}>
      <Checkbox
      color='green'
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
        <Text style={[styles.regularText,{width:'80%'}]}>I would like to receive your newsletter and other promotional information.</Text>
      </View>
      <View>
        <AppButton name={'Sign Up'}/>
      </View>
      </View>
      <View style={{position:'absolute', bottom:25, alignSelf:'center'}}>
     <Text style={styles.regularText}>Already have an account?</Text>
     <Text onPress={()=>{navigation.navigate('Login')}} style={styles.touchableText}>Login</Text>
     </View>
    </View>
  );
};

export default SignUp;
