import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import news from '../data/news';

export default class ShowNews extends React.Component{

    static navigationOptions = {
        title: 'XXX标题',
    };


    render(){
        const newsId =this.props.navigation.getParam('newsId');

        return(
            <View>
                <Text>查看具体新闻</Text>
            </View>
        );
    }
}