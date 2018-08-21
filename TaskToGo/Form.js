import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }

    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {

                this.props.navigation.navigate('TaskForm');
            })
            .catch(() => {
                this.state = ({ error: 'Authentication failed, please register an account', loading: false })
            })
    }

    onSignupPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate('TaskForm');
            })
            .catch(() => {
                this.state = ({ error: 'Authentication failed', loading: false })
            })
    }

    render() {
        return (
            <View style={styles.container}>
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