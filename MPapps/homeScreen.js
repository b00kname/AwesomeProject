import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class homeScreen extends Component {
    static navigationOptions= {
        title: 'Home'
    }

    render () {
        return (
            <View style= {styles.container}>
                <Text style= {styles.title}>MPapp</Text>
                <Text>An app contains various of tools</Text>
                <View style= {styles.button}>
                    <TouchableOpacity
                        onPress= {()=> this.props.navigation.navigate('registration')}>
                        <Text style= {styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                
                <View style= {styles.button}>
                    <TouchableOpacity
                        onPress= {()=> this.props.navigation.navigate('contact')}>
                        <Text style= {styles.buttonText}>Contact</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20b2aa'
    },
    title: { 
        fontSize: 35,
        margin: 30
    },
    button: {
        backgroundColor: '#ff6347',
        color: '#ffffff',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        margin:10,
        padding: 5
    }
})