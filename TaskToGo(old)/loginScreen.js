import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StatusBar, StyleSheet} from 'react-native';

export default class loginScreen extends Component {
    render () {
        return (
            <View style= {styles.container}>
                <StatusBar
                    barStyle= 'light-content'
                />

                <View style= {styles.logoContainer}>
                    <Image 
                        style= {styles.logo}
                        source= {require('./taskToGo.png')}
                    />
            
                    <Text style= {styles.title}>Task To Go</Text>
                    <Text style= {styles.title}>I will help you to organize all your task !</Text>
                </View>
            
                <View style= {styles.formContainer}>
                    <TextInput
                        style= {styles.input}
                        placeholder= 'email'
                        placeholderTextColor= 'rgba(255,255,255,0.7)'
                        returnKeyType= 'next'
                        onSubmitEditing= {()=> this.passwordInput.focus()}
                        keyboardType= 'email-address'
                        autoCapitalize= 'none'
                        autoCorrect= {false}
                    />

                    <TextInput
                        style= {styles.input}
                        placeholder= 'password'
                        placeholderTextColor= 'rgba(255,255,255,0.7)'
                        secureTextEntry
                        returnKeyType= 'go'
                        ref= {(input)=> this.passwordInput= input}
                    />

                    <TouchableOpacity style= {styles.buttonContainer}>
                        <Text style= {styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style= {styles.buttonRegister}
                        onPress= {()=> this.props.navigation.navigate('registration')}
                    >
                        <Text style= {styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    logo: {
        width: 200,
        height: 100
    },
    title: {
        color:'white',
        fontSize: 20,
        margin: 10,
        width: 250,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainer: {
        padding: 20
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        fontSize: 25,
        height: 60,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        margin: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
    buttonRegister: {
        backgroundColor: 'red',
        paddingVertical: 15,
        margin: 10
    }
})