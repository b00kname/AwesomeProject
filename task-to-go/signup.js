import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from './logo';
import Form from './form'

// Added comment
export default class signup extends Component {
    render() {
        return(
            <View style= {styles.container}>
                <Logo/>
                <Form type= 'Signup'/>
                <View style= {styles.signupTextCont}>
                    <Text style= {styles.signupText}>Already have an account?</Text>
                    <Text style= {styles.signupButton} onPress={()=>this.props.navigation.goBack()}>Sign in</Text>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create ({
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