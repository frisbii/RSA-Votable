import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TestScreen from './TestScreen';
import TabBarIcon from '../components/TabBarIcon';
import ElectionsBottomTabs from './ElectionsBottomTabs';
import HomeScreen from './HomeScreen';
import OutreachScreen from './OutreachScreen';

const Tab = createBottomTabNavigator();

export default function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <TabBarIcon route={route} focused={focused} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'purple',

        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search">
        {() => <TestScreen name="Search" />}
      </Tab.Screen>
      <Tab.Screen name="Elections" component={ElectionsBottomTabs} />
      <Tab.Screen name="Outreach" component={OutreachScreen} />
      <Tab.Screen name="Settings">
        {() => <TestScreen name="Settings" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}