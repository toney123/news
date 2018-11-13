import React from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';

export default class Login extends React.Component{
    render(){
      return(
        <View style={styles.body}>
          <View style={styles.bodyLeft}>
          </View>
          <View style={styles.bodyCenter}>
            <View style={styles.formTop}>
            </View>
            <View style={styles.formCenter}>
              <View style={styles.form}>
                <View style={styles.title}>
                  <Text style={styles.titleText}>资讯</Text>
                </View>
                <View style={styles.account}>
                  <Text>帐号</Text>
                  <TextInput
                    style={styles.accountInput}
                  ></TextInput>
                </View>
                <View style={styles.password}>
                  <Text>密码</Text>
                  <TextInput
                    secureTextEntry={true}
                    style={styles.passwordInput}
                  ></TextInput>
                </View>
                <View style={styles.login}>
                  <Button style={styles.loginBtn} title="登录" onPress={()=>this.props.navigation.navigate('Home')} />
                </View>
              </View>
            </View>
            <View style={styles.formBottom}>
            </View>
          </View>
          <View style={styles.bodyRight}>
          </View>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  body:{
    justifyContent:'center',
    flexDirection:'row',
    flex:1
  },
  bodyLeft:{
    flex:1
  },
  bodyCenter:{
    flex:3
  },
  bodyRight:{
    flex:1
  },
  formTop:{
    flex:1
  },
  formCenter:{
    flex:4
  },
  formBottom:{
    flex:1
  },
  form:{
    
  },
  title:{
    alignSelf:'center',
  },
  titleText:{
    fontSize:45
  },
  account:{
    marginTop:20
  },
  accountInput:{
    borderStyle:'solid',
    borderColor:'#9C9C9C',
    borderBottomWidth:1,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderRadius:5,
    height:35
  },
  password:{
    marginTop:20
  },
  passwordInput:{
    borderStyle:'solid',
    borderColor:'#9C9C9C',
    borderBottomWidth:1,
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderRadius:5,
    height:35
  },
  login:{
    marginTop:50
  },
  loginBtn:{
    
  },

});