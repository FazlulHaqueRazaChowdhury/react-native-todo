import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import cross from '../assets/icon-cross.svg';
import check from '../assets/icon-check.svg';
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

const Task = ({index,task,deleteTasks,updateTask,darkMode}) => {

    return (
        <View style={styles.container}>
            <View style={index === 1 ? darkMode ?  styles.tasksTop : styles.tasksTopLight : darkMode ?  styles.tasksBox : styles.tasksBoxLight}>
                <View>
            {
                task.completed ?  
                <AnimatedLinearGradient
                start={[0, 0]} end={[1, 1]}   location={[0.25, 0.4, 1]}
                colors={[" hsl(192, 100%, 67%)", "hsl(280, 87%, 65%)"]}
                style={styles.circleCheck}>
                <Image source={check} style={{width: '10px', height: '10px'}}/>
                </AnimatedLinearGradient> 
                : 
             <Text style={styles.circle} onPress={()=>{updateTask(task.id)}}>
                   
             </Text>

            }           
        
                </View>
                <View style={styles.taskCross}>
                <Text  style={task.completed ? styles.tasksCrossed: darkMode ?   styles.tasks : styles.tasksLight}>{task.taskName}</Text>
             <Text onPress={()=>{deleteTasks(task.id)}}>
                <Image  source={cross} style={{width:'15px',  height:'15px'}}/>
             </Text>

                </View>
            </View>

        </View>
    );
}
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const styles = StyleSheet.create({
    tasksBox:{
        backgroundColor: 'hsl(235, 24%, 19%)',
        paddingVertical: '15px',
        paddingHorizontal: '15px',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: 'hsl(233, 14%, 35%)',
    },
    tasksBoxLight:{
        backgroundColor: 'hsl(236, 33%, 92%)',
        paddingVertical: '15px',
        paddingHorizontal: '15px',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: 'hsl(233, 14%, 35%)',
    },
    tasksTop:{
        backgroundColor: 'hsl(235, 24%, 19%)',
        paddingVertical: '15px',
        paddingHorizontal: '15px',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: 'hsl(233, 14%, 35%)',
        borderTopStartRadius: '5px',
        borderTopEndRadius: '5px'
    },
    tasksTopLight:{
        backgroundColor: 'hsl(236, 33%, 92%)',
        paddingVertical: '15px',
        paddingHorizontal: '15px',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: 'hsl(233, 14%, 35%)',
        borderTopStartRadius: '5px',
        borderTopEndRadius: '5px'
    },
    circle: {
        width: '20px',
        height: '20px',
        borderWidth: '1px',
        borderColor: 'hsl(233, 14%, 35%)',
        borderRadius: '999px',
    },
    circleCheck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4px',
        borderWidth: '1px',
        borderColor: 'hsl(233, 14%, 35%)',
        borderRadius: '999px',
    },
    taskCross: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tasks: {
        flex: 1,
        width: '100%',
        color: 'hsl(234, 39%, 85%)',
        borderWidth: 0,
        marginLeft: '7px'

    },
    tasksLight: {
        flex: 1,
        width: '100%',
        color: 'black',
        borderWidth: 0,
        marginLeft: '7px'

    },
    tasksCrossed: {
        flex: 1,
        width: '100%',
        color: 'hsl(233, 14%, 35%)',
        textDecorationLine: 'line-through',
        borderWidth: 0,
        marginLeft: '7px'

    },
 

})

export default Task;
