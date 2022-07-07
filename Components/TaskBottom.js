import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

const TaskBottom = ({tasks,setTasks}) => {
    const clearTasks = () => {
        const updatedTasks = tasks.filter(task => !task.completed );
        setTasks(updatedTasks);
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <Text style={styles.text}>{
                    tasks.filter(task => !task.completed).length
                } tasks left</Text>
                 <Text style={styles.text} onPress={clearTasks}>Clear Completed</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor: 'hsl(235, 24%, 19%)',
        paddingVertical: '15px',
        paddingHorizontal: '15px',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        flex: 1,
        flexDirection: 'row',
        width : '100%',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    text: {
        
        color: 'hsl(233, 14%, 35%)',
    }
})

export default TaskBottom;
