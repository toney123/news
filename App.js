import React from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Home from './component/home';
import Login from './component/login';


const App = createStackNavigator({
  Home:{
    screen:Home
  },
  Login:{
    screen:Login
  }
},{
  initialRouteName:'Login'
});

export default App;





