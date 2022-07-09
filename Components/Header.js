import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import image from '../assets/icon-sun.svg';
import image2 from '../assets/icon-moon.svg';
const Header = ({darkMode,setDark}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>TODO</Text>
            <Text onPress={()=>{
                setDark(!darkMode)
            }}>
            <Image  source={darkMode ? image : image2 } style={styles.image}/>
            </Text>
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
