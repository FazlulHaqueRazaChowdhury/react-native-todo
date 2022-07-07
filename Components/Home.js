import React, { useState } from 'react';
import image from '../assets/bg-mobile-dark.jpg';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Header from './Header';
import Textinput from './TextInput';
import Tasks from './Tasks';

const Home = () => {
    const [tasks,setTasks] = useState([
        {
            id: 0,
            taskName : 'Namaz',
            completed: true
        },
        {
            id: 1,
            taskName : 'Lunch',
            completed: false
        },
        {
            id: 2,
            taskName : 'Cricket',
            completed: true
        },
        {
            id: 3,
            taskName : 'Video Games',
            completed: false
        },
        {
            id: 4,
            taskName : 'Study',
            completed: false
        },
    ])
    return (
        <View>
                <View>
                <ImageBackground source={image} style={styles.backgroundImage}>
                <Header/>
                <Textinput tasks={tasks} setTasks={setTasks}/>
                </ImageBackground>
                <Tasks setTasks={setTasks} tasks={tasks}/>
                </View>           
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: '30vh',
        width: '100%'
    }

})

export default Home;
