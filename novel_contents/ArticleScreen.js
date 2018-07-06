import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const articles= {
  fourleafclover: {
    name: 'Four Leaf Clover',
    article: 'The project is go to primary school to have an one day camp for primary students.'
  },
  langkawiproject: {
    name: 'Langkawi Project',
    article: '4 days 3 night camp to primary school.'
  }
}

export default class ArticleScreen extends Component {
  render () {
    let selectedArticle= this.props.navigation.getParam('input');
    return (
      <View>
        <Text>{articles[selectedArticle].name}</Text>
        <Text>{articles[selectedArticle].article}</Text>
      </View>
    )
  }
}
