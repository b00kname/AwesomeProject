import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {InputWithLabel} from './Ui';

export default class registrationScreen extends Component {
    static navigationOptions= {
        title: 'Registration'
    }
    _onPressRegister= ()=> {alert('Susseccfully registered !')}
    _onPressCancel= ()=> {alert('Registration Cancel !')}

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            ic: '',
            email: '',
            phone: '',
            password: '',
            address: '',
            city: '',
            state: '',
            country: ''
        }
    }

    render () {
        return (
            <ScrollView>
                <InputWithLabel 
                    label= {'Name :'}
                    placeholder= {'Your Name'}
                    value= {this.state.name}
                    onChangeText= {(name)=> this.setState({name})}
                    orientation= {'horizontal'}
                />

                <InputWithLabel
                    label= {'NRIC No :'}
                    placeholder= {'Your NRIC No:'}
                    value= {this.state.ic}
                    onChangeText= {(ic)=> this.setState({ic})}
                    keyboardType= {'numeric'}
                />

                <InputWithLabel
                    label= {'Email :'}
                    placeholder= {'Your Email Address'}
                    value= {this.state.email}
                    onChangeText= {(email)=> this.setState({email})}
                    keyboardType= {'email-address'}
                />

                <InputWithLabel
                    label= {'Phone :'}
                    placeholder= {'Your Phone Number'}
                    value= {this.state.phone}
                    onChangeText= {(phone)=> this.setState({phone})}
                    keyboardType= {'numeric'}
                />

                <InputWithLabel
                    label= {'Address :'}
                    placeholder= {'Where you live'}
                    value= {this.state.address}
                    onChangeText= {(address)=> this.setState({address})}
                />

                <InputWithLabel
                    label= {'City :'}
                    placeholder= {'City you live'}
                    value= {this.state.city}
                    onChangeText= {(city)=> this.setState({city})}
                />

                <InputWithLabel
                    label= {'State :'}
                    placeholder= {'State or Province'}
                    value= {this.state.state}
                    onChangeText= {(state)=> this.setState({state})}
                />

                <InputWithLabel
                    label= {'Country :'}
                    placeholder= {'Country you live'}
                    value= {this.state.country}
                    onChangeText= {(country)=> this.setState({country})}
                />
                
                <View style= {styles.button}>
                    <TouchableNativeFeedback style= {StyleSheet.button}
                        onPress= {this._onPressRegister}>
                        <Text style= {styles.buttonText}>Register</Text>
                    </TouchableNativeFeedback>
                </View>
                
                <View style= {styles.button}>
                    <TouchableNativeFeedback
                        onPress= {this._onPressCancel}>
                        <Text style= {styles.buttonText}>Cancel</Text>
                    </TouchableNativeFeedback> 
                </View>

            </ScrollView>
        );
    }
}

const styles= StyleSheet.create ({
    button: {
        backgroundColor: '#ff6347',
        color: '#ffffff',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        margin: 10,
        padding: 5
    }
})




