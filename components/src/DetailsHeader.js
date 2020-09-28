import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, Button, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {LineChart, Grid, LinearGradient} from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from "d3-shape";
import { EvilIcons } from '@expo/vector-icons'; 

const DetailsHeader = (props) => {
    return (
        
        <View style={styles.headerContainer}>
            <AntDesign name="left" size={24} color="#495162" style = {styles.back} onPress={() => navigate('Home')}/>
            <Image style= {styles.icon} 
            source= {{uri:props.coinIcon}}/>
            <Text style = {styles.header}> {props.name} </Text>      
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
    marginTop: 43,
    padding: 21.5,
    height: 65,
    width: 375,
    flexDirection: "row",
    justifyContent: 'center',
  },
  header: {     
    flex: 1,
    fontSize: 18,
    lineHeight: 21,
    color: '#495162',
    paddingLeft: 20,
    textAlign: 'center',
  },
    headerContainer: {
    marginTop: 43,
    paddingTop: 21.5,
    height: 65,
    width: 375,
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 19,
    justifyContent: 'center',
  },
  header: {     
    fontSize: 18,
    lineHeight: 21,
    color: '#495162',

  },
  icon: {
    width: 36,
    height: 36,
  },
  back: {
    position: 'absolute',
    left: 10,
    paddingTop: 24,
    alignItems: 'center',
  }

});

export default DetailsHeader;
        
