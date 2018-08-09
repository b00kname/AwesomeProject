import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Logo extends Component {
    render() {
        return(
            <View style= {styles.container}>
                <Image style= {{width: 200, height: 100}}
                    source= {require('./taskToGo.png')}/>
                <Text style= {styles.logoTitle}>Task To Go</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create ({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    logoTitle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 20,
        marginVertical: 15
    }
})