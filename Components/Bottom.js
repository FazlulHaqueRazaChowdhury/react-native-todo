import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import cross from '../assets/icon-cross.svg';
import check from '../assets/icon-check.svg';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

const Bottom = ({index}) => {
    return (
        <View style={styles.container}>
            <View style={styles.tasksTop }>
             
                <Text  style={styles.tasks}>All</Text>
                <Text  style={styles.tasks}>Active</Text>
                <Text  style={styles.tasks}>Completed</Text>


                </View>
            </View>

    );
}
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const styles = StyleSheet.create({

    tasksTop:{
        width: '100%',
        backgroundColor: 'hsl(235, 24%, 19%)',
        paddingVertical: '15px',
        paddingHorizontal: '15px',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: '50px',
        borderRadius: '5px'
    },
    tasks: {
        fontWeight: '700',
        marginHorizontal: '5px',
        color: 'hsl(234, 39%, 85%)',


    },
 

})

export default Bottom;
