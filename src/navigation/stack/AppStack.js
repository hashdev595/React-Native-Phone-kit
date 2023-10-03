import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//** screen */
import Feeds from '../../screens/App/Feeds/Feeds';
import Market from '../../screens/App/Market/Market';
import { BottomTabNavigator } from '../bottomTabNavigator/BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTabNavigator'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name={'Feeds'} component={Feeds} />
      <Stack.Screen name={'Market'} component={Market} /> */}
      <Stack.Screen name={'BottomTabNavigator'} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export {AppStack};
