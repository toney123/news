import React from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';

const check = {
  'account':'test',
  'password':'123'
}

export default class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      account:'',
      password:''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount(){
     
  }

  handleLogin(){

    fetch('https://demo.edu.ink/api/login',{
      method:'post',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email:'admin@edu.ink',
        password:'21800000'
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.data!=null){
          console.warn(responseJson.data.access_token);
        }
      })
      .catch((error) =>{
        console.error(error);
    });


    // if(this.state.password != check.password){
    //   alert('密码错误');
    // }else{
    //   this.props.navigation.navigate('TabBar');
    // }
  }

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
                  <TextInput
                    placeholder="帐号"
                    style={styles.accountInput}
                    onChangeText={(text)=>this.setState({account:text})}
                  ></TextInput>
                </View>
                <View style={styles.password}>
                  <TextInput
                    placeholder="密码"
                    secureTextEntry={true}
                    style={styles.passwordInput}
                    onChangeText={(text)=>this.setState({password:text})}
                  ></TextInput>
                </View>
                <View style={styles.login}>
                  <Button style={styles.loginBtn} title="登录" 
                    onPress={this.handleLogin} 
                  />
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
    flex:1,
    backgroundColor:'#FFF'
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
    borderRadius:5,
  },
  password:{
    marginTop:20
  },
  passwordInput:{
    borderStyle:'solid',
    borderColor:'#9C9C9C',
    borderBottomWidth:1,
    borderRadius:5,
  },
  login:{
    marginTop:50
  },
  loginBtn:{
    
  },

});