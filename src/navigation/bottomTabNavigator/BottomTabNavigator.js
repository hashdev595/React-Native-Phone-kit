import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feeds from '../../screens/App/Feeds/Feeds';
import Market from '../../screens/App/Market/Market';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../../screens/App/Profile/Profile';
import Conversation from '../../screens/App/Conversation/Conversation';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName="Feeds">
      <Tab.Screen options={{ tabBarIcon: ()=>(<Icon name='home-outline' color='black' size={25}/>), tabBarLabel: () => null}} name="Feeds" component={Feeds} />
      <Tab.Screen options={{ tabBarIcon: ()=>(<Icon name='storefront-outline' color='black' size={25}/>), tabBarLabel: () => null}} name="Market" component={Market} />
      <Tab.Screen options={{ tabBarIcon: ()=>(<Icon name='person-circle-outline' color='black' size={30}/>), tabBarLabel: () => null}} name="Profile" component={Profile} />
      <Tab.Screen options={{ tabBarIcon: ()=>(<Icon name='chatbubbles-outline' color='black' size={30}/>), tabBarLabel: () => null}} name="Conversation" component={Conversation} />
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};
