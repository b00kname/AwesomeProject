import React, {Component} from 'react';
import {InputWithLabel} from 'react-native';
import Ui from './Ui';

export default class registrationScreen extends Component {
    render () {
        return (
            <InputWithLabel 
                label= {'Name :'}
                placeholder= {'Your Name'}
                value= {this.state.name}
                onChangeText= {(name)=> this.setState({name})}
                orientation= {'horizontal'}
            />
        );
    }
}