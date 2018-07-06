import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const authors= {
  bookname: {
    name: 'Book Name',
    description: 'Big salty fish'
  },
  esther: {
    name: 'Esther Liew',
    description: 'small salty fish'
  }
}

export default class AuthorScreen extends Component {
  render () {
    let selectedAuthor= this.props.navigation.getParam('input');
    return (
      <View>
        <Text>{authors[selectedAuthor].name}</Text>
        <Text>{authors[selectedAuthor].description}</Text>
      </View>
    );
  }
}
