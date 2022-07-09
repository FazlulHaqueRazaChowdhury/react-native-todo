import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import Bottom from './Bottom';
import Task from './Task';
import TaskBottom from './TaskBottom';

const Tasks = ({darkMode,tasks , setTasks}) => {
    const[all,setAll] = useState(0);
    const deleteTasks = (id) => {
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
                all === 0 &&
                tasks.map((task,index)=> <Task darkMode={darkMode} updateTask={updateTask} key={index} deleteTasks={deleteTasks}  task={task} index={index + 1} />)
            }
            {
                  all === 1 &&
                tasks.map((task,index)=> task.completed && <Task darkMode={darkMode} updateTask={updateTask} key={index} deleteTasks={deleteTasks}  task={task} index={index + 1} />)
            }
            {
                  all === 2 &&
                tasks.map((task,index)=> !task.completed && <Task darkMode={darkMode} updateTask={updateTask} key={index} deleteTasks={deleteTasks}  task={task} index={index + 1} />)
            }
            <TaskBottom darkMode={darkMode} setTasks={setTasks} tasks={tasks}/>

            <Bottom setAll={setAll} tasks ={tasks} setTasks={setTasks} darkMode={darkMode}/>
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
