import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Book from '../Components/Book';
import Settings from '../Components/Settings';
import Home from '../Home';

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
            case 'Book':
              iconName = focused ? 'book' : 'book-outline';
              break;

            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F0224E',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          paddingBottom: 5,
          height: 60,
          position: 'absolute',  // Floating
          bottom: 250,
          bottom: 25,            // Lower the tab bar a bit more to the middle-bottom
          alignSelf: 'center',           // Move it higher towards the middle
          left: 'auto',          // Center it horizontally
          right: 'auto',         // Center it horizontally
          width: 280,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          elevation: 20,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
          borderTopWidth: 0,
        },


        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Book" component={Book} />
      <Tab.Screen name="Settings" component={Settings} />
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
        headerTintColor: '#000',
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
