import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class registrationScreen extends Component {
    render () {
        return (
            <View style= {styles.container}>
                <Text style={styles.title}>Registration Screen</Text>

                <TextInput
                    style= {styles.input}
                    placeholder= 'Your email (username)'
                    placeholderTextColor= 'rgba(255,255,255,0.7)'
                />

                <TextInput
                    style= {styles.input}
                    placeholder= 'Your password'
                    secureTextEntry
                />

            </View>
        )
    }
}

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'
    },
    title: {
        fontSize: 25,
        color: '#FFF'
    },
    input: {
        height: 50,
        color: '#FFF',
    }
})