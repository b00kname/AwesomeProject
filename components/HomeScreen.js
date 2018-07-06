import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions= {
    title: 'Home',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: 'white'
  }

  constructor(props) {
    super(props);
    this.state = {

      typeAtScreen : ''


    }

  }


  render() {
    return (
      <View style= {styles.container}>
        <Text style= {styles.title}>Welcome to Pet Wonderland</Text>
        <Text>Choose your favorite pet~</Text>
      <View style= {styles.button}>
        <Button
          title= 'Corgi'
          onPress= {()=> this.props.navigation.navigate('Animal', {input: 'corgi'})}
        />
        <TextInput
          onChangeText= {(x)=> this.setState({ typeAtScreen : x })}
          value={this.state.typeAtScreen}
        />
        <Button
          title= 'Fluffy'
          onPress= {()=> this.props.navigation.navigate('Animal', {input: 'fluffy'})}
        />
      </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
  },
  title: {
    fontSize: 35  ,
    textAlign: 'center',
    margin: 30
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 30,
    margin: 30
  }
})
