import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import {LineChart, Grid, LinearGradient} from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from "d3-shape";
import {Header, HistoryPeriods, Description, Information, CryptoContainer, Graph} from "./components/src";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import Details from './Details';

const Navigator = createStackNavigator({
    Home: { screen: Home,
      navigationOptions: {
        headerShown: false,
      }
    },
    Details: { screen: Details,
        navigationOptions: {
        headerShown: false,
      } },
});


const App = createAppContainer(Navigator);

export default App;