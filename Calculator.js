import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state= {
      x: '0',
      y: '0',
      sum: '0',
      subtraction: '0'
    }
  }

  render () {
    return (
      <View>
        <Text>First Number</Text>
        <TextInput onChangeText= {(x)=> {
          this.setState({
            x: x,
            sum: (Number(x) + Number(this.state.y)).toString(),
            subtraction: (Number(x) - Number(this.state.y)).toString()
          })
        }}
        value= {this.state.x}
        keyboardType= {'numeric'}
        selectTextOnFocus= {true}
        />

        <Text>Second Number</Text>
        <TextInput onChangeText= {(y)=> {
          this.setState({
            y: y,
            sum: (Number(y) + Number(this.state.x)).toString(),
            subtraction: (Number(this.state.x) - Number(y)).toString()
          })
        }}
        value= {this.state.y}
        keyboardType= {'numeric'}
        selectTextOnFocus= {true}
        />

        <Text>Sum</Text>
        <TextInput
          value= {this.state.sum}
          editable= {false}
        />

        <Text>Subtraction</Text>
        <TextInput
          value= {this.state.subtraction}
          editable= {false}
        />
      </View>
    );
  }
}
