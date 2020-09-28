import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart, AreaChart, Grid} from 'react-native-svg-charts';
import { Path, Defs, Stop, LinearGradient} from "react-native-svg";
import * as shape from "d3-shape";

const Gradient = ({ index }) => (
        <Defs key={index}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'100%'} stopColor="#F15A29" stopOpacity={0}/>                    
                <Stop offset={'0%'} stopColor="#F15A29" stopOpacity={1}/>
            </LinearGradient>
        </Defs>
    )

const Line = ({ line }) => (
    <Path
         key={'line'}
             d={line}
            stroke={'#F79C7F'}
            strokeWidth = {3}
            fill={'none'}
        />
    )   

class GradientGraph extends React.PureComponent {
    render() {

        const data = [(Math.random() * (200)) ,(Math.random() * (200)),(Math.random() * (200)) , (Math.random() * (200)) , (Math.random() * (200)) , (Math.random() * (200)) , (Math.random() * (200)) , (Math.random() * (200)) ,
                    (Math.random() * (200)), (Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200)),(Math.random() * (200))]
        return (
            <AreaChart
                style={{ height: 66 }}
                data={data}
                contentInset={{ top: 10, bottom: 10 }}
                curve={shape.curveMonotoneX}
                svg={{ fill: 'url(#gradient)', fillOpacity: 0.2 }}
            >
            <Line/>
            <Gradient/>
            </AreaChart>
        )
    }
}

export default GradientGraph;
