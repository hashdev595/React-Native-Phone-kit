import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//** Screen */
import Login from '../../screens/Auth/Login/Login';
import SignUp from '../../screens/Auth/SignUp/SignUp';
import VerifyOtp from '../../screens/Auth/VerifyOtp/VerifyOtp';
import ForgotPassword from '../../screens/Auth/ForgotPassword/ForgotPassword';
import ChangePassword from '../../screens/Auth/ChangePassword/ChangePassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'VerifyOtp'} component={VerifyOtp} />
      <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
      <Stack.Screen name={'ChangePassword'} component={ChangePassword} />
    </Stack.Navigator>
  );
};

export {AuthStack};
