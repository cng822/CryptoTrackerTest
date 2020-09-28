import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart, AreaChart, Grid} from 'react-native-svg-charts';
import { Path, Defs, Stop, LinearGradient} from "react-native-svg";
import * as shape from "d3-shape";

class GradientGraph extends React.PureComponent {
    render() {

        const data = [(Math.random() * (200)) ,(Math.random() * (200)),(Math.random() * (200)) , (Math.random() * (200)) , (Math.random() * (200)) , (Math.random() * (200)) , (Math.random() * (200)) , (Math.random() * (200)) ,
                    (Math.random() * (200)), (Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200))]
        return (
            <LineChart
                style={{ height: 66 }}
                fontWeight='bold'
                data={data}
                curve = {shape.curveMonotoneX}
                svg={{ stroke: '#F15A29', strokeWidth: 3 }}
                contentInset={{ top: 20, bottom: 20 }}
            >
            </LineChart>
        )
    }
}

export default GradientGraph;
