import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TestScreen from './TestScreen';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

export default function ElectionsBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
              return <TabBarIcon route={route} focused={focused} size={size} color={color} />;
            },
            
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',

      })}
    >
        <Tab.Screen name="Races">
            { () => <TestScreen name="Races" /> }
        </Tab.Screen>
        <Tab.Screen name="Candidates">
            { () => <TestScreen name="Candidates" /> }
        </Tab.Screen>
        <Tab.Screen name="News">
            { () => <TestScreen name="News" /> }
        </Tab.Screen>
        <Tab.Screen name="Contribute">
            { () => <TestScreen name="Contribute" /> }
        </Tab.Screen>
    </Tab.Navigator>
  );
}
