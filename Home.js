import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {LineChart, Grid, LinearGradient} from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from "d3-shape";
import { EvilIcons } from '@expo/vector-icons'; 
import {Header, HistoryPeriods, Description, Information, CryptoContainer, Graph} from "./components/src";

const url1 = 'https://assets-api.sylo.io/v2/all';
const url2 = 'https://assets-api.sylo.io/v2/asset/id/${data.id}/rate'
export default class Home extends React.Component {
  static navigationOptions = {
      title: 'Home',
  };
    
  constructor(props) {
    super(props);
      this.state = {
        loading: true,
        dataSource:[]
    };
  }
componentDidMount(){
fetch(url1)
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
}


// const [rate] = fiatPriceAPI(data.item.id);
renderItem=(data)=>
<TouchableOpacity style={styles.list}  onPress={() => this.props.navigation.navigate('Details', {name: data.item.name, coinIcon: data.item.icon_address, symbol: data.item.symbol})}>
    <View style={styles.labelContainer}>
    <Text style={styles.coinName}>{data.item.name}</Text>
    <Image style= {styles.icon} 
    source= {{uri:data.item.icon_address}}/>
    <Text style = {styles.rate}>${(Math.random() * 1000).toFixed(3)} </Text>
    <Text style = {styles.change}>+{(Math.random() * 10).toFixed(2)}% (${(Math.random() * 10).toFixed(3)})</Text>
    </View>
    <Graph style={{height: 66, width: 343}}/>
</TouchableOpacity>
render(){
 if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large"/>
    </View>
  )}
return(
 <View style={styles.container}>
 <Header/>
 <HistoryPeriods/>
 <FlatList
    style = {styles.result}
    data= {this.state.dataSource}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
 />
</View>
)}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
    list:{
    overflow: "hidden", 
    height:140,
    width: 343,
    margin: 16,
    borderWidth: 2,
    borderColor: '#F6F6F6',
    borderRadius: 15,
    justifyContent: 'center',
  },
    coinName: {
    left: 60,
    fontSize: 15,
    lineHeight: 21, 
    color: '#495162',
    position: 'absolute',
    fontWeight: '600',
    marginTop: 16,
    // fontFamily: Raleway-SemiBold,
  },
    labelContainer: {
    flexDirection: "row",
    height: 54,
    width: 343,
  },
  icon: {
    height: 36, 
    width: 36, 
    marginLeft:12,
    marginTop: 9,
  },
    rate: {
    fontSize: 15,
    lineHeight: 17.52, 
    color: '#495162',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 12,
    paddingBottom: 25,
    fontWeight: '600',
     marginTop: 8,
    // fontFamily: Raleway-SemiBold,
  },
  change: {
    fontSize: 12,
    lineHeight: 18, 
    color: '#33BB5D',
    right: 14,
    alignSelf: 'flex-end',
    position: 'absolute',
    paddingBottom: 7,
    fontWeight: '600',
    // fontFamily: Raleway-SemiBold,
  },
});
   