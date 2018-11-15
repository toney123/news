import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import news from '../data/news';
import NewsDetails from '../component/news/NewsDetails';

export default class ShowNews extends React.Component{


    constructor(props){
        super(props);
        this.state={
            news:''
        }
    }



    componentWillMount(){
        const newsId =this.props.navigation.getParam('newsId');
        news.forEach(element => {
            if(element.id == newsId){
                this.setState({
                    news:element
                });
            }
        });
    }

    componentDidMount(){
        
    }
    

    render(){
        return(
            <NewsDetails news={this.state.news} />
        );
    }
}