import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

export default class Firebase extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyDG4GzUOBrpt9dr3VdiUZSpr5TY9dzm7N4',
            authDomain: 'tasktogoo.firebaseapp.com '
        }

        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (

        );
    }
}