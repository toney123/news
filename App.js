import React from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './src/view/Login';
import Home from './src/view/Home';
import My from './src/view/My';
import ShowNews from './src/view/ShowNews';


const TabBar = createBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      ),
      tabBarLabel:'首页',
    }),
  },
  My:{
    screen:My,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <Icon name="user" size={25} color={tintColor} />
      ),
      tabBarLabel:'我'
    }),
  },
},{
  initialRouteName:'Home',
  tabBarOptions:{
    showIcon:true
  }, 
});


const StackNavigator = createStackNavigator({
  TabBar:{
    screen:TabBar,
    navigationOptions:()=>({
      title:'资讯',
      headerLeft:null
    })
  },
  Login:{
    screen:Login,
    navigationOptions:()=>({
      header:null
    })
  },
  ShowNews:{
    screen:ShowNews
  }
},{
  initialRouteName:'Login',
  navigationOptions:()=>({
    headerStyle:{
      backgroundColor:'#DCDCDC',
    },
  })
});

export default class App extends React.Component{
  
  render(){
    return(
      <StackNavigator />
    );
  }
} 






