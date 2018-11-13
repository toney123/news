import React from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Home from './component/home';
import Login from './component/login';


const StackNavigator = createStackNavigator({
  Home:{
    screen:Home,
  },
  Login:{
    screen:Login,
  }
},{
  initialRouteName:'Home',
  // 全局设置
  navigationOptions:()=>({
    header:null
  })
});

export default class App extends React.Component{
  
  render(){
    return(
      <StackNavigator />
    );
  }
} 






