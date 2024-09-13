import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Main from './components/Main/MainScreen';
import Home from './components/Home/HomeScreen';

// const Stack = createNativeStackNavigator();
// 底部导航
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <GestureHandlerRootView style={{ flex: 1}}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // 隐藏所有页面的标题栏
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}