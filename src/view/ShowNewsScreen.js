import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import news from '../data/news';
import NewsDetails from '../component/news/NewsDetails';

export default class ShowNewsScreen extends React.Component{

    static navigationOptions = ({navigation})=>{
        return {
            title: navigation.getParam('news').title
        }
    }
    

    constructor(props){
        super(props);
        this.state={
            news:''
        }
    }



    componentWillMount(){
        const newsId =this.props.navigation.getParam('news').id;
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