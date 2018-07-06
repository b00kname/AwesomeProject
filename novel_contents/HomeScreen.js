import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  constructor (props) {
    super (props);
    this.state= {
      selectedAuthor: '',
      selectedArticle: ''
    }
  }

  render () {
    return (
      <View>
        <Text>Welcome to UTAR Novel World</Text>

        <TextInput
          onChangeText= {(x)=> this.setState ({selectedAuthor: x})}
          value= {this.state.selectedAuthor}
        />
        <Button
          title= 'Author'
          onPress= {(x)=> this.props.navigation.navigate ('Author', {input: this.state.selectedAuthor})}
        />

        <TextInput
          onChangeText= {(y)=> this.setState ({selectedArticle: y})}
          value= {this.state.selectedArticle}
        />
        <Button
          title= 'Article'
          onPress= {(x)=> this.props.navigation.navigate('Article', {input: this.state.selectedArticle})}
        />
      </View>
    );
  }
}
