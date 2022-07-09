import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Text} from 'react-native';

const Textinput = ({tasks,setTasks,darkMode}) => {
    const [show,setShow] = useState(false);
    const [text,setText] = useState('');
    const showButton = (e) =>{
        if(e.target.value === ''){
            return setShow(false);
        } 
        setText(e.target.value);
        return setShow(true);
    }
    const addTask = () => {
        let newTask ={ 
            id: Math.round(Math.random()*10),
            taskName : text,
            completed: false
        };
        let newTasks = [...tasks,newTask];
        setTasks(newTasks);
    }
    return (
        <View style={styles.container}>
            <View style={darkMode ? styles.inputBox : styles.inputBoxLight}>
                <View style={styles.circle}></View>
                 <TextInput onChange={showButton} underlineColorAndroid ='transparent' style={styles.input} placeholder='Create a new todo...'/>
                {
                    show ?    <Button onPress={addTask} color="hsl(235, 24%, 19%)" title='+' /> : ''
                }
                 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: '40px',
        marginTop: '50px',
        marginBottom: '10px'
    },
    inputBox:{
        backgroundColor: 'hsl(235, 24%, 19%)',
        paddingVertical: '15px',
        paddingHorizontal: '15px',
        maxHeight: '50px',
        borderRadius: '5px',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        overflow: 'hidden'
    },
    inputBoxLight:{
        backgroundColor: 'hsl(236, 33%, 92%)',
        paddingVertical: '15px',
        paddingHorizontal: '15px',
        maxHeight: '50px',
        borderRadius: '5px',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        overflow: 'hidden'
    },
    circle: {
        width: '20px',
        height: '20px',
        borderWidth: '1px',
        borderColor: 'hsl(233, 14%, 35%)',
        borderRadius: '999px',
    },
    input: {
        flex: 1,
        width: '100%',
        color: 'hsl(233, 14%, 35%)',
        borderWidth: 0,
        marginLeft: '7px',
        outlineWidth: 0,

    },

})

export default Textinput;
