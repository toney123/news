import React from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView} from 'react-native';

export default class NewsDetails extends React.Component{

    render(){
        return(
            <ScrollView>
            <View style={styles.body}>
                <View style={styles.bodyLeft}></View>       
                    <View style={styles.bodyCenter}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{this.props.news.title}</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.contentTop}>
                                <Text style={styles.contentText}>{this.props.news.content}</Text>
                            </View>
                            <View style={styles.contentBottom}>
                                <View style={styles.contentBottomLeft}>
                                    <Text style={styles.createTime}>{this.props.news.createTime}</Text>
                                </View>
                                <View style={styles.contentBottomRight}>
                                    <Text style={styles.author}>{this.props.news.author}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.comment}>
                            <Text style={styles.commentTip}>暂无评论</Text>
                        </View>
                    </View>
                <View style={styles.bodyRight}></View>
            </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#FFF',
        flexDirection:'row',
    },
    bodyLeft:{
        flex:1,
    },
    bodyCenter:{
        flex:10,
    },
    title:{
        flex:1,
        marginTop:15,
        borderBottomWidth:1,
        borderColor:'#CDC9C9',
    },
    titleText:{
        fontWeight:'bold',
        marginBottom:10,
    },
    content:{
        flex:6,
        borderBottomWidth:1,
        borderColor:'#CDC9C9',
    },
    contentTop:{
        flex:10,
    },
    contentBottom:{
        flex:1,
        flexDirection:'row', 
        marginBottom:10,
    },
    contentBottomLeft:{
        flex:3, 
    },
    contentBottomRight:{
        flex:1, 
    },
    contentText:{
        marginTop:10,
        marginBottom:10,
    },
    comment:{
        flex:1,
    },
    bodyRight:{
        flex:1,
    },
    commentTip:{
        marginTop:10,
        marginBottom:10,
        textAlign:'center',
    }
    
});