import React from 'react';
import image from '../assets/bg-mobile-dark.jpg';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Header from './Header';
import Textinput from './TextInput';
import Tasks from './Tasks';

const Home = () => {
    return (
        <View>
                <View>
                <ImageBackground source={image} style={styles.backgroundImage}>
                <Header/>
                <Textinput/>
                </ImageBackground>
                <Tasks/>
                
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
