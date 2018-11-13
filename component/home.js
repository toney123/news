import React from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Index from './index';
import Personal from './personal';


const TabNavigator = createBottomTabNavigator({
  '首页':{
    screen:Index,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      ),
      // tabBarOnPress:({navigation,defaultHandler})=>{
      //   console.warn(navigation.state.routeName);
      // },
    }),
  },
  '我':{
    screen:Personal,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <Icon name="user" size={25} color={tintColor} />
      )}
    ),
  },
},{
  initialRouteName:'首页',
  tabBarOptions:{
    showIcon:true,
    swipeEnabled:true
  }, 
});


const StackNavigator = createStackNavigator({
  Tab:TabNavigator,
  '首页':{
    screen:Index,
  },
  '我':{
    screen:Personal
  }
},{
  navigationOptions: ({ navigation }) => ({
    headerTitle: '首页',
    headerStyle:{
      backgroundColor:'#DCDCDC'
    },
    headerTitleStyle:{
      alignSelf:'center'
    }
  }),
}
);





export default class Home extends React.Component{
  render(){
    return(
      <StackNavigator/>
    );
  }
}




