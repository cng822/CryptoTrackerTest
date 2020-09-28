
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LineChart, Grid } from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from "d3-shape";

const CryptoContainer = props => {
    return(
        <View style = {styles.crytoContainer, props.style}>
        {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    crytoContainer:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: "space-between",
    }
});

export default CryptoContainer;