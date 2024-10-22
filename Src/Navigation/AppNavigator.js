import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../Components/Home';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            default:
              iconName = 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F0224E',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 80,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />

    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F0224E',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />


    </Stack.Navigator>
  );
};

export default AppNavigator;