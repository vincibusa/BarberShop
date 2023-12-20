import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Componente per la bottom bar
function MainTabs() {
  return (
<Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#03001C', // Cambia il colore dello sfondo della bottom bar qui
    },
  }}
>
  
     
    
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  screenOptions={{
        headerShown: false
      }}> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
