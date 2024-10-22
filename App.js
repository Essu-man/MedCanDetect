import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './Src/Components/Home';
import AppNavigator from './Src/Navigation/AppNavigator';
import SignIn from './Src/SignIn';
import SignUp from './Src/SignUp';
import Splash from './Src/Splash';
const Stack = createStackNavigator();

const App = () => {
  console.log("App Component Loaded");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;