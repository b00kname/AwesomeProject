import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class InputWithLabel extends Component {
    consturctor (props) {
        super(props);

        this.orientation= this.props.orientation? (this.props.orientation== 'horitonzal'? 'row': 'column'): 'column';
    }

    render () {
        return (
            <View>
                <Text>{this.props.label? this.props.label: ''}</Text>
                <TextInput
                    onChangeText= {this.props.onChangeText}
                    value= {this.props.value}
                    placeholder= {this.props.placeholder? this.props.placeholder: ''}
                    multiline= {this.props.multiline? this.props.multiline: false}
                    keyboardType= {this.props.keyboardType? this.props.keyboardType: 'default'}
                    secureTextEntry= {this.props.secureTextEntry? this.props.secureTextEntry: false}
                    selecttextOnFocus= {this.props.selecttextOnFocus? this.props.selecttextOnFocus: false}
                    editable= {this.props.editable!= null? true: false}
                />
            </View>
        );
    }
}

const styles= StyleSheet.create ({
    container: {
        flex: 1
    },
    label: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 3
    },
    textInput: {
        flex: 3,
        fontSize: 22
    }
})