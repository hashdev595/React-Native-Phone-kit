import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feeds from '../../screens/App/Feeds/Feeds';
import Market from '../../screens/App/Market/Market';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName="Feeds">
      <Tab.Screen options={{ tabBarIcon: ()=>(<Icon name='home-outline' color='black' size={25}/>), tabBarLabel: () => null}} name="Feeds" component={Feeds} />
      <Tab.Screen options={{ tabBarIcon: ()=>(<Icon name='storefront-outline' color='black' size={25}/>), tabBarLabel: () => null}} name="Market" component={Market} />
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};
