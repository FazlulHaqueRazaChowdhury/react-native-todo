import React from 'react';
import {View, StyleSheet} from 'react-native';
import Bottom from './Bottom';
import Task from './Task';
import TaskBottom from './TaskBottom';

const Tasks = () => {
    return (
        <View style={styles.container}>
            {
                [...Array(5).keys()].map(task=> <Task key={task} index={task + 1} />)
            }
            <TaskBottom/>
            
            <Bottom/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: '40px',
        marginTop: '-50px'
    },
})

export default Tasks;
