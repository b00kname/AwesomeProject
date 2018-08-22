import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDG4GzUOBrpt9dr3VdiUZSpr5TY9dzm7N4",
    authDomain: "tasktogoo.firebaseapp.com",
    databaseURL: "https://tasktogoo.firebaseio.com",
    projectId: "tasktogoo",
    storageBucket: "tasktogoo.appspot.com",
    messagingSenderId: "682989888050"
};
firebase.initializeApp(config);

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }
    onLoginPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ message: '' })
                this.props.navigation.navigate('TaskForm')
            })
            .catch(() => {
                this.setState({ message: 'Email/Password incorrect, Please register before login.' })
            })
    }

    onSignupPress() {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ message: 'Register Successfully !' })
            })
            .catch(() => {
                this.setState({ message: 'User exist, password must longer than 6 digits.' })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 200, height: 100 }}
                    source={require('./taskToGo.png')} />

                <Text style={styles.logoTitle}>Task To Go</Text>

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

                <Text style={styles.message}>{this.state.message}</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoTitle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 20,
        marginVertical: 15
    },

    message: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 20,
        textAlign: 'center'
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