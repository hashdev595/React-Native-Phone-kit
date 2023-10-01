import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//** screen */
import Feeds from '../../screens/App/Feeds/Feeds';
import Market from '../../screens/App/Market/Market';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Feeds'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Feeds'} component={Feeds} />
      <Stack.Screen name={'Market'} component={Market} />
    </Stack.Navigator>
  );
};

export {AppStack};
