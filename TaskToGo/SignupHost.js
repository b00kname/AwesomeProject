import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Signup from './Signup';

export default class SignupHost extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#7b1fa2'
                />
                <Signup navigation={this.props.navigation} />
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
    }
})