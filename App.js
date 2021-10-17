import React, { Component } from 'react';
import {
  TouchableOpacity, View
} from 'react-native';

//Import react-native-splash-screen.
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from "./Screens/Login";
import SignUp from './Screens/SignUp';
import Demo from './Screens/Demo';
import Notification from './Screens/Notification';
import ForgotPassword from './Screens/ForgotPassword';
import OtpVerification from './Screens/OtpVerification';
import ResetPassword from './Screens/ResetPassword';
import SplashScreen from './Screens/SplashScreen';


const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}  
      />
      <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown:false}}
      />
     <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{headerShown:false}}
      />

     <Stack.Screen
      name="OtpVerification"
      component={OtpVerification}
      options={{headerShown:false}}
      />

    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown:false}}
      />
      
     
      

    </Stack.Navigator>
  );
};



export default class App extends Component{

  render()
  {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="Login"
          component={Login}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="ResetPasswotrd"
        component={ResetPassword}
        options={{headerShown:false}}
        />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  )
  };
}


