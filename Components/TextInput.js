import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Textinput = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <View style={styles.circle}></View>
                 <TextInput underlineColorAndroid ='transparent' style={styles.input} placeholder='Create a new todo...'/>
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
        borderRadius: '5px',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
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

    }

})

export default Textinput;
