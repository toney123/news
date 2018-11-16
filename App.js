import React from 'react';
import {AsyncStorage} from 'react-native';
import {createSwitchNavigator,createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './src/view/LoginScreen';
import HomeScreen from './src/view/HomeScreen';
import MyScreen from './src/view/MyScreen';
import ShowNewsScreen from './src/view/ShowNewsScreen';
import Storage from 'react-native-storage';
import StartScreen from './src/view/StartScreen';

const BottomTabNavigator = createBottomTabNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      ),
      tabBarLabel:'首页',
    }),
  },
  My:{
    screen:MyScreen,
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
  Start:{
    screen:StartScreen,
    navigationOptions:()=>({
      header:null
    })
  },
  TabBar:{
    screen:BottomTabNavigator,
    navigationOptions:()=>({
      title:'资讯',
      headerLeft:null
    })
  },
  Login:{
    screen:LoginScreen,
    navigationOptions:()=>({
      header:null
    })
  },
  ShowNews:{
    screen:ShowNewsScreen
  }
},{
  initialRouteName:'Start',
  navigationOptions:()=>({
    headerStyle:{
      backgroundColor:'#DCDCDC',
    },
  })
});

export default class App extends React.Component{

  constructor(props){
    super(props);
    // 初始化存储配置
    let storage = new Storage({
      size:1000,
      storageBackend:AsyncStorage,
      defaultExpires:null,
      enableCache:true,
      sync:{

      }
    });
    global.storage = storage;

  }

  componentWillMount(){
    
  }
  
  render(){
    return(
      <StackNavigator />
    );
  }
} 






