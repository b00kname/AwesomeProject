import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class Form extends Component {
    constructor (props) {
        super (props)
    }
    render() {
        return(
            <View style= {styles.container}>
                <TextInput style= {styles.inputBox} underlineColorAndroid= 'rgba(0, 0, 0, 0)'
                    placeholder= 'Email'
                    placeholderTextColor= '#ffffff'/>

                <TextInput style= {styles.inputBox} underlineColorAndroid= 'rgba(0, 0, 0, 0)'
                    placeholder= 'Password'
                    placeholderTextColor= '#ffffff'
                    secureTextEntry= {true}/>

                <TouchableOpacity style= {styles.button}>
                    <Text style= {styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles= StyleSheet.create ({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 18,
        color: '#ffffff',
        fontSize: 18,
        marginVertical: 10
    },

    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    }

})