import React from 'react';
import {Platform, StyleSheet, Text, View,Button,Image} from 'react-native';

export default class MyScreen extends React.Component{


    render(){
      return(
        <View style={styles.body}>
          <View style={styles.bodyTop}>
            <View style={styles.bodyTopUserLeft}> 
              <Image style={styles.bodyTopUserLeftUserAvatar} source={require('../public/image/default.jpg')}></Image>
            </View>
            <View style={styles.bodyTopUserRight}> 
              <Text style={styles.bodyTopUserRightUserName}>用户名</Text>
              <Text style={styles.bodyTopUserRightLogout}>退出</Text>
            </View>
          </View>
          <View style={styles.bodyBottom}>

          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
  },
  bodyTop:{
    flex:1,
    borderWidth:1,
    borderColor:'#D3D3D3',
    backgroundColor:'#D3D3D3',
    flexDirection:'row'
  },
  bodyBottom:{
    flex:2,
  },
  bodyTopUserLeft:{
    flex:1,
  },
  bodyTopUserRight:{
    flex:2,
  },
  bodyTopUserLeftUserAvatar:{
    width:80,
    height:80,
    borderRadius:80,
    marginTop:20,
    marginLeft:20
  },
  bodyTopUserRightUserName:{
    
  }
});