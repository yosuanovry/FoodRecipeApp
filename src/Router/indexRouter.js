import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Pages/Auth/login';
import Register from '../Pages/Auth/register';
import ForgotPassword from '../Pages/Auth/forgotpassword';
import RequestPassword from '../Pages/Auth/requestpassword';
import ResetPassword from '../Pages/Auth/resetpassword';
import BottomTabNavigatorBefore from './bottomTabNavigatorBefore';
import BottomTabNavigator from './bottomTabNavigator';
import SearchMenu from '../Pages/Menu/searchMenu';
import PopularRecipes from '../Pages/Menu/popularRecipes';
import DetailMenu from '../Pages/Menu/detailMenu';
import { useDispatch,useSelector } from 'react-redux';

const Router = () => {
  const Stack = createStackNavigator();
  const isAuth = useSelector((state) => state.Auth_Login)

  if(!isAuth.data) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="RequestPassword" component={RequestPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Search" component={SearchMenu} />
          <Stack.Screen name="Popular" component={PopularRecipes} />
          <Stack.Screen name="Detail" component={DetailMenu} />
          <Stack.Screen name="Home" component={BottomTabNavigatorBefore} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="RequestPassword" component={RequestPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Search" component={SearchMenu} />
        <Stack.Screen name="Popular" component={PopularRecipes} />
        <Stack.Screen name="Detail" component={DetailMenu} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
