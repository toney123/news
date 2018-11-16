import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class StartScreen extends React.Component{

    constructor(props){
        super(props);
        this.waitTime = 3000;
        this.openTimer = true,
        this.state={
            nowTime:'',
        }
        this.jumpNewPageNow = this.jumpNewPageNow.bind(this);
    }

    jumpNewPage(openTimer,time,pageName){
        if(openTimer){
            this.switchTimer = setTimeout(()=>{
                // 关闭倒计时
                clearInterval(this.overplusTimer);
                this.props.navigation.reset([NavigationActions.navigate({ routeName: pageName })],0);
            },time);
        }else{
            this.props.navigation.reset([NavigationActions.navigate({ routeName: pageName })],0);
        }
    }

    componentWillMount(){
        let i = this.waitTime/1000;  
        this.overplusTimer = setInterval(()=>{
            if(i > 0){
                this.setState({
                    nowTime:i--
                });
            }
        },1000);
    }

    componentDidMount(){
        // 加载用户的token
        global.storage.load({
            key:'loginStatus',
          }).then(ret=>{
           global.token = ret.token;

           this.jumpNewPage(this.openTimer,this.waitTime,'TabBar');
            
          }).catch(err=>{
            switch(err.name){
                case 'NotFoundError':
                    this.jumpNewPage(this.openTimer,this.waitTime,'Login');
                    break;
            }
          }); 
    }

    componentWillUnmount(){
        this.switchTimer && clearTimeout(this.switchTimer);
    }

    jumpNewPageNow(){
        // 关闭倒计时
        clearInterval(this.overplusTimer);
        // 关闭定时器
        clearTimeout(this.switchTimer);
        
        let pageName;
        if(global.token==undefined){
            pageName='Login';
        }else{
            pageName='TabBar';
        }
        this.props.navigation.reset([NavigationActions.navigate({ routeName: pageName })],0);
    }


    render(){
        const TimerText = ()=>{
            // 开启倒计时才显示
            if(this.openTimer){
                return (
                <TouchableOpacity onPress={this.jumpNewPageNow}>  
                    <View style={styles.bodyRightContentBottomBorder}>
                        <Text style={styles.bodyRightContentBottomNum}>{this.state.nowTime}</Text>
                        <Text style={styles.bodyRightContentBottomText}>跳过</Text>
                    </View>
                </TouchableOpacity>     
                );
            }else{
                return <Text></Text>;
            }
        };
        

        return(
            <View style={styles.body}>
                <View style={styles.bodyLeft}></View>
                <View style={styles.bodyCenter}>
                    <View style={styles.bodyCenterContentTop}></View>
                    <View style={styles.bodyCenterContentCenter}>
                        <Text style={styles.bodyCenterContentCenterText}>资讯</Text>
                    </View>
                    <View style={styles.bodyCenterContentBottom}></View>
                </View>
                <View style={styles.bodyRight}>
                    <View style={styles.bodyRightContentTop}></View>
                    <View style={styles.bodyRightContentCenter}></View>
                    <View style={styles.bodyRightContentBottom}>
                        <TimerText/>
                    </View>
                </View>
            </View>
        );
    }
} 


const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#FFF',
        flexDirection:'row'
    },
    bodyLeft:{
        flex:1,
    },
    bodyCenter:{
        flex:2,
    },
    bodyRight:{
        flex:1,
    },
    bodyCenterContentTop:{
        flex:1,
    },
    bodyCenterContentCenter:{
        flex:1
    },
    bodyCenterContentBottom:{
        flex:1,
    },
    bodyCenterContentCenterText:{
        textAlign:'center',
        fontSize:55
    },
    bodyRightContentTop:{
        flex:1
    },
    bodyRightContentCenter:{
        flex:8,
    },
    bodyRightContentBottom:{
        flex:1,
    },
    bodyRightContentBottomBorder:{
        borderWidth:1,
        borderColor:'#DCDCDC',
        backgroundColor:'#DCDCDC',
        borderRadius:10,
        width:60,
        flexDirection:'row',
        marginTop:5,
        marginLeft:5,
    },
    bodyRightContentBottomNum:{
        marginLeft:5,
    },
    bodyRightContentBottomText:{
        marginLeft:10,
    }
});