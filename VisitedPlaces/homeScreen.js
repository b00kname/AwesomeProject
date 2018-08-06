import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {InputWithLabel} from './VisitedPlaces/Ui';

export default class homeScreen extends Component {
    constructor (props) {
        super (props);
        this.state= {
            name: '',
            city: ''
        }
    }
    render () {
        return (
            <InputWithLabel
                label= {'Name: '}
                placeholder= {'Filter with Name'}
                value= {this.state.name}
                onTextChange= {(x)=> this.setState({name: x})}
                orientation= {'horizontal'}

            />
        )
    }
}