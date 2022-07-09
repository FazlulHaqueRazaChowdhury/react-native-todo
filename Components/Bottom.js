import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import cross from '../assets/icon-cross.svg';
import check from '../assets/icon-check.svg';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

const Bottom = ({darkMode,setAll}) => {
    const [activeLink,setActive] = useState(1);
    const handleAll = () => {
        setAll(0);
        setActive(1);
    }
    const handleActive = () => {
        setAll(2);
        setActive(2);
    }
    const handleComplete = () => {

        setAll(1);
        setActive(3);
    }

    return (
        <View style={styles.container}>
            <View style={darkMode ? styles.tasksTop : styles.tasksTopLight }>
             
                <Text onPress={handleAll}  style={darkMode ? activeLink === 1 ? styles.tasksActive: styles.tasks : activeLink === 1 ? styles.tasksLightActive : styles.tasksLight }>All</Text>
                <Text onPress={handleActive}   style={darkMode ? activeLink === 2 ? styles.tasksActive: styles.tasks : activeLink === 2 ? styles.tasksLightActive : styles.tasksLight }>Active</Text>
                <Text onPress={handleComplete}    style={darkMode ? activeLink === 3 ? styles.tasksActive: styles.tasks : activeLink === 3 ? styles.tasksLightActive : styles.tasksLight }>Completed</Text>


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
    tasksTopLight:{
        width: '100%',
        backgroundColor: 'hsl(236, 33%, 92%)',
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
    tasksActive: {
        fontWeight: '700',
        marginHorizontal: '5px',
        color: 'blue',

    },
    tasksLight: {
        fontWeight: '700',
        marginHorizontal: '5px',
        color: 'gray',

    },
    tasksLightActive: {
        fontWeight: '700',
        marginHorizontal: '5px',
        color: 'blue',

    },
 

})

export default Bottom;
