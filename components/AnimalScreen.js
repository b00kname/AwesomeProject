import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const animals= {
  corgi: {
    name: 'Corgi',
    image: require('./img/corgi.jpg')
  },
  fluffy: {
    name: 'Fluffy',
    image: require('./img/fluffy.jpg')
  }
}

export default class AnimalScreen extends Component {
  static navigationOptions= ({navigation})=> {
    return {
      title: animals[navigation.getParam('input')].name
    }
  }

  render() {
    let animal_details= this.props.navigation.getParam('input');
      return (
        <View>
          <Text style={styles.title}>{animals[animal_details].name} LOVE U</Text>
          <Image style={styles.image}
            source= {animals[animal_details].image}
            />
        </View>
      );
  }
}

const styles= StyleSheet.create({
  title: {
    fontSize: 35  ,
    textAlign: 'center',
    margin: 30
  },
  image: {
    width: 420,
    height: 410
  }
})
