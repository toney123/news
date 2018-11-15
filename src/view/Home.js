import React from 'react';
import {Platform, StyleSheet, Text, View,Button,FlatList,TouchableOpacity} from 'react-native';
import ContentList from '../component/home/ContentList';
import news from '../data/news';


export default class Home extends React.Component{

    constructor(props){
      super(props);
      this.state={
        contentItem:''
      }
    }


    // 忽略缺少key的警告
    extraUniqueKey(item ,index){
      return "index"+index+item;
    }

    render(){
      return(
        <View>
          <FlatList data={news} 
          keyExtractor={this.extraUniqueKey}
          renderItem={({item,index})=>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('ShowNews',
            {
              newsId:item.id,
              newsTitle:item.title
            })
            }
          }>
            <ContentList item={item} />
          </TouchableOpacity>
          }
          />
          
        </View>
      );
    }
}


