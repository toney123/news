import React from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class Home extends React.Component{
    render(){
      return(
        <View>
          <Text>首页</Text>
          <Button title="跳转登录页" onPress={()=>this.props.navigation.navigate('Login')} />
        </View>
      );
    }
  }