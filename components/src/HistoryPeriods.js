import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {LineChart, Grid, LinearGradient} from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from "d3-shape";
import { EvilIcons } from '@expo/vector-icons'; 


const HistoryPeriods = () => {
  return (
    <View style= {styles.timestamps}>
        <View>
          <Text style= {styles.times}>all</Text>
        </View>
        <View>
          <Text style= {styles.times}>year</Text>
        </View>
        <View>
          <Text style = {styles.month}> month </Text>
        </View>
        <View>
          <Text style= {styles.times}>week</Text>
        </View>
        <View>
          <Text style= {styles.times}>day</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    timestamps: {
    lineHeight: 21,
    marginLeft: 20,
    width: 336,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'baseline',
    fontWeight: '500',
    textAlign: 'center',
  },
  times: {
    color: '#8A96AA',
    fontSize: 15, 
    lineHeight: 21,
    fontWeight: '500',
  },
  month: {
    color: '#F15A29',
    fontWeight: '500',
    fontSize: 15, 
    lineHeight: 21,
  },

});

export default HistoryPeriods;