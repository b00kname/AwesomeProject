import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from './Logo';
import Form from './Form';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type='Login' />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignupHost') }}>
                        <Text style={styles.signupButton}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row'
    },

    signupText: {
        color: '#ffffff',
        fontSize: 16
    },

    signupButton: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500'
    }
})