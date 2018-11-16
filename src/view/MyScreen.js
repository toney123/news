import React from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class MyScreen extends React.Component{

  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.state={
      fullName:'',
      email:''
    }
    this.getData();
  }

  getData(){
    fetch('https://demo.edu.ink/api/user/info',{
      method:'post',
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        access_token:global.token
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.error==0){
          this.setState({
            fullName:responseJson.data.first_name+' '+responseJson.data.last_name,
            email:responseJson.data.email
          });
        }else{
          alert(responseJson.message);
        }
      })
      .catch((error) =>{
        console.error(error);
    });
  }

  componentWillMount(){
    
  }

  logout(){
    global.storage.remove({
      key: 'loginStatus'
    });
    this.setState({
      fullName:'',
      email:''
    });
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })],0);
  }


  render(){
    return(
      <View style={styles.body}>
        <View style={styles.bodyTop}>
          <View style={styles.bodyTopUserLeft}> 
            <Image style={styles.bodyTopUserLeftUserAvatar} source={require('../public/image/default.jpg')}></Image>
          </View>
          <View style={styles.bodyTopUserRight}> 
            <Text style={styles.bodyTopUserRightUserName}>{this.state.fullName}</Text>
            <Text style={styles.bodyTopUserRightEmail}>{this.state.email}</Text>
          </View>
        </View>
        <View style={styles.bodyBottom}>
          <TouchableOpacity onPress={this.logout}>
            <View style={styles.bodyBottomLogout}>
              <Text style={styles.bodyBottomLogoutText}>退出</Text>
            </View>
          </TouchableOpacity>
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
    marginTop:30,
  },
  bodyTopUserRightEmail:{
    marginTop:10,
  },

  bodyBottomLogout:{
    marginTop:20,
    borderColor:'#D3D3D3',
    borderBottomWidth:1,
    backgroundColor:'#D3D3D3',
    height:35,
  },
  bodyBottomLogoutText:{
    marginTop:8,
    marginLeft:20
  }
});