import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import image from '../assets/icon-sun.svg';
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>TODO</Text>
            <Image source={image} style={styles.image}/>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '40px',
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px'
    },
    title:{
        fontSize: '24px',
        color: 'white',
        fontWeight: '700',
        letterSpacing: 8,
    },
    image: {
        width: '25px',
        height: '25px'
    }
})

export default Header;
