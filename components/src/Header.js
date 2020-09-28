import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, Button, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {LineChart, Grid, LinearGradient} from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from "d3-shape";
import { EvilIcons } from '@expo/vector-icons'; 

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>
                Tracker
            </Text>
            <EvilIcons name="search" size={24} color= '#495162' position = 'absolute' right = '17'/>
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

});

export default Header;