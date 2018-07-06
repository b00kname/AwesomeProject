import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const greeting= 'Hello world, my name is Shu Ming !!!';
const imageSource= {uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg'};
const styles= StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: 'purple',
  },
  text: {
    fontSize: 30  ,
    color: 'white',
  },
});

export default class HelloWorld extends Component {
  render() {
    return(
      <View style= { styles.container}>
        <Text style= { styles.text}>{ greeting }</Text>
        <Image source= { imageSource }
          style= { { width: 400, height: 400 } }
        ></Image>
      </View>
      );
  }
}
