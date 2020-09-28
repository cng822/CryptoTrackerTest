
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LineChart, Grid } from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from "d3-shape";
import GradientGraph from "./gradientGraph";
import CryptoContainer from "./cryptoContainer"

class Information extends React.Component {
        
render(){
    return (
        <View>
            <CryptoContainer style={styles.details}>
                <View style={{height: 67}}>
                <Text style = {styles.rate}> $0.0218 </Text>
                 <Text style = {styles.change}> +4.48($0.0097) </Text>
                 </View>
                 <GradientGraph style = {styles.graph}/>
          </CryptoContainer>
           <View style = {{marginTop: 30}}>
                <Text style = {styles.title}> Information          </Text>
                <Text style = {styles.little}> Symbol:             {this.props.symbol}  </Text>
                <Text style = {styles.little}> Market Cap:      $25,471,051.38 NZD        </Text>
                <Text style = {styles.little}> 24h Volume:     $58,905.49 NZD</Text>
            </View>
            </View>
    )
  }
}

export default Information; 

const styles = StyleSheet.create({
   details: {
        overflow: "hidden", 
        backgroundColor: 'white',
        height:185,
        width: 335,
        marginTop: 24,
        marginBottom: 11,
        marginLeft:20,
        borderWidth: 2,
        borderColor: '#F6F6F6',
        borderRadius: 15,
        flexDirection: 'column',
   },
    change: {
        fontSize: 12,
        lineHeight: 18, 
        position: 'absolute',
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#33BB5D',
        marginTop: 36,
    // fontFamily: Raleway-SemiBold,
    },
   graph: {
    height: 121,
    width: 335,
    marginBottom: 36,
   },

   title: {
       fontSize: 15, 
       lineHeight: 21, 
       color: '#495162',
    textAlign: 'center',
   },
   little: {
       fontSize: 15, 
       lineHeight: 21, 
       color: '#8A96AA',
       paddingTop: 12,
       paddingLeft: 36,
       textAlign: 'left',

   },
    rate: {
    fontSize: 18,
    lineHeight: 21, 
    color: '#495162',
    position: 'absolute',
    fontWeight: '600',
    marginTop: 12,
    textAlign: 'center',
    alignSelf: 'center',
    // fontFamily: Raleway-SemiBold,
  },

});
