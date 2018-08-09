import {createStackNavigator, StackNavigator} from 'react-navigation';
import LoginHost from './loginHost';
import SignupHost from './signupHost';
import React, {Component} from 'react';

export default createStackNavigator ({
        'LoginHost': {screen: LoginHost},
        'SignupHost': {screen: SignupHost}
    },
    {
        initialRouteName: 'LoginHost',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)