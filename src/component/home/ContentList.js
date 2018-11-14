import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ContentList extends React.Component{


    render(){
        return(
            
            <View style={styles.content}>
                <View style={styles.main}>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.author}>{this.props.item.author}</Text>
                    <Text style={styles.createTime}>{this.props.item.createTime}</Text>
                </View>
            </View>
        
        );
    }
}

const styles = StyleSheet.create({
    content:{
      borderStyle:'solid',
      borderColor:'#9C9C9C',
      borderBottomWidth:1,
      borderColor:'#CDC9C9',
      backgroundColor:'#FFF',
    },
    title:{
        // fontWeight:'bold',
        fontSize:18
    },
    info:{
        flexDirection:'row'
    },
    createTime:{
        color:'#A9A9A9',
        marginLeft:15
    },
    author:{
        color:'#A9A9A9',
    }
});