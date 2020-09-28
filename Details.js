import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {LineChart, Grid, LinearGradient} from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from "d3-shape";
import { EvilIcons } from '@expo/vector-icons'; 
import {Header, HistoryPeriods, Description, Information, CryptoContainer, GradientGrap, DetailsHeader} from "./components/src";



export default class Details extends React.Component {
       static navigationOptions = ({ navigation }) => {
        return {
            name: navigation.getParam('name'),
            coinIcon: navigation.getParam('coinIcon'),
            symbol: navigation.getParam('symbol')
        };
    };
  render(){
  const { navigate, state } = this.props.navigation;
    return (
        <View style={styles.container}>
           <DetailsHeader navigate = {this.props.navigation} name = {state.params.name} coinIcon = {state.params.coinIcon}/>
          <HistoryPeriods/>
          <Information  symbol = {state.params.symbol}/>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },

});
