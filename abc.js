import React, {Component} from 'react';
import {View, Text, TextInput, Picker, TouchableOpacity, StyleSheet} from 'react-native';

export default class registration extends Component {
    static navigationOptions= {
        title: 'Register'
    }

    constructor (props) {
        super(props);
        this.state= {
            name: '',
            gender: '',
            email: '',
            phone: '',
            password: ''
        }
    }

    render () {
        return (
            <View style= {styles.container}>
                <Text style= {styles.title}>Join us by filling the details below !</Text>
                
                <TextInput
                    onChangeText= {(name)=> this.setState({name})}
                    value= {this.state.name}
                    placeholder= {'Name'}
                />

                <Picker
                    prompt= {'Gender'}
                    selectedValue= {this.state.gender}
                    onValueChange= {(x ,y)=> this.setState({gender: x})}>
                    <Picker.Item label= 'Male' value= 'Male'/>
                    <Picker.Item label= 'Female' value= 'Female'/>
                </Picker> 

                <TextInput
                    onChangeText= {(email)=> this.setState({email})}
                    value= {this.state.email}
                    placeholder= {'Email'}
                    keyboardType= {'email-address'}
                />

                <TextInput
                    onChangeText= {(phone)=> this.setState({phone})}
                    value= {this.state.phone}
                    placeholder= {'Phone'}
                    keyboardType= {'phone-pad'}
                />

                <TextInput
                    onChangeText= {(password)=> this.setState({password})}
                    value= {this.state.password}
                    placeholder= {'Password'}
                    secureTextEntry= {true}
                />

                <View style= {styles.button}>
                    <TouchableOpacity
                        onPress= {()=> this.props.navigation.navigate('home')}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#20b2aa'
    },
    title: {
        fontSize: 35,
        margin: 30
    },
    button: {
        backgroundColor: '#ff6347',
        color: '#ffffff'
    }
})