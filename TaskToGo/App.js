import { createStackNavigator, StackNavigator } from 'react-navigation';
import LoginHost from './LoginHost';
import SignupHost from './SignupHost';
import React, { Component } from 'react';

export default createStackNavigator({
    'LoginHost': { screen: LoginHost },
    'SignupHost': { screen: SignupHost }
},
    {
        initialRouteName: 'LoginHost',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)