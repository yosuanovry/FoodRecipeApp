import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Pages/Home/home';
import AddMenu from '../Pages/Menu/addMenu';
import MyMenu from '../Pages/Menu/myMenu';
import MyProfile from '../Pages/Profile/myProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
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

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: 'white'},
          tabBarInactiveTintColor: '#666666',
          tabBarActiveTintColor: '#EEC302',
        }}>
        <Tab.Screen
          name="HomeAfter"
          component={HomeStack}
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
          name="Add"
          component={AddMenu}
          options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="add-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Recipes"
          component={MyMenu}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="pizza-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Profile"
          component={MyProfile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  

  export default BottomTabNavigator;