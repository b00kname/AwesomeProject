import {createStackNavigator, StackNavigator} from 'react-navigation';
import LoginHost from './loginHost';
import SignupHost from './signupHost';
import React, {Component} from 'react';

export default createStackNavigator ({
        'Login': {screen: LoginHost},
        'Signup': {screen: SignupHost}
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)