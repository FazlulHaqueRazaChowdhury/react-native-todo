import React from 'react';
import {View, StyleSheet} from 'react-native';
import Bottom from './Bottom';
import Task from './Task';
import TaskBottom from './TaskBottom';

const Tasks = ({tasks , setTasks}) => {
    const deleteTasks = (id) => {
        console.log(id);
        const filter = tasks.filter(task => task.id != id);
        setTasks(filter);
    }
    const updateTask = (id) => {
        const find = tasks.find(task => task.id == id);
        let update = {
            taskName : find.taskName,
            completed: true
        }
        const rest = [...tasks];
        rest[tasks.indexOf(find)] = update;
        
        setTasks(rest);

    }
    return (
        <View style={styles.container}>
            {
                tasks.map((task,index)=> <Task updateTask={updateTask} key={index} deleteTasks={deleteTasks}  task={task} index={index + 1} />)
            }
            <TaskBottom setTasks={setTasks} tasks={tasks}/>

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
