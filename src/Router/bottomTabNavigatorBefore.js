import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Pages/Home/home';
import Login from '../Pages/Auth/login';
import Register from '../Pages/Auth/register';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackBefore = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const BottomTabNavigatorBefore = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: 'white'},
          tabBarInactiveTintColor: '#666666',
          tabBarActiveTintColor: '#EEC302',
        }}>
        <Tab.Screen
          name="Home Before"
          component={HomeStackBefore}
          options={() => ({
            tabBarStyle: {
              backgroundColor: 'white',
            },
            tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size} />
              ),
          })}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="login" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  

  export default BottomTabNavigatorBefore;