import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDG4GzUOBrpt9dr3VdiUZSpr5TY9dzm7N4",
    authDomain: "tasktogoo.firebaseapp.com",
    databaseURL: "https://tasktogoo.firebaseio.com",
    projectId: "tasktogoo",
    storageBucket: ""
};
firebase.initializeApp(config);

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            password: ''
        })
    }

    onLoginPress = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
            this.props.navigation.navigate('TaskForm')
        }
        catch (error) {
            console.log(error.toString)
        }
    }


    onSignupPress = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            this.props.navigation.navigate('TaskForm');
        }
        catch (error) {
            console.log(error.toString)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#7b1fa2'
                />
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0, 0, 0, 0)'
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })} />

                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0, 0, 0, 0)'
                    placeholder='Password'
                    placeholderTextColor='#ffffff'
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })} />

                <TouchableOpacity style={styles.button}
                    onPress={this.onLoginPress.bind(this)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={this.onSignupPress.bind(this)}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7b1fa2'
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