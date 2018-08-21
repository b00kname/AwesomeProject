import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import {
  InputWithLabel,
  AppButton,
} from './UI';
import io from 'socket.io-client';

var socket = io.connect('http://10.0.2.2:5000/circle', {
    transports: ['websocket'],
});


export default class CreateScreen extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      radius: '0',
      circumference: '0',
      area: '0',
    };

    // When connected, emit a message to the server to inform that this client has connected to the server.
    // Display a Toast to inform user that connection was made.
    socket.on('connect', () => {
        console.log(socket.id); // undefined
        socket.emit('client_connected', {connected: true});
        ToastAndroid.show('Connected to server', ToastAndroid.LONG);
    });

    // Handle connection error
    socket.on('error', (error) => {
        ToastAndroid.show('Failed to connect to server', ToastAndroid.LONG);
    })

    // Receive result from server.
    socket.on('server_send', (data) => {
        let result = JSON.parse(data);

        this.setState({
            circumference: result.circumference.toString(),
            area: result.area.toString(),
        });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InputWithLabel style={styles.input}
          label={'Radius'}
          value={this.state.radius}
          onChangeText={(radius) => {this.setState({radius})}}
          keyboardType={'numeric'}
          orientation={'vertical'}
        />
        <InputWithLabel style={styles.output}
          label={'Circumference'}
          value={this.state.circumference}
          editable={false}
          orientation={'vertical'}
        />
        <InputWithLabel style={styles.output}
          label={'Area'}
          value={this.state.area}
          editable={false}
          orientation={'vertical'}
        />
        <AppButton style={styles.button}
          title={'Compute'}
          theme={'primary'}
          onPress={() => {
              socket.emit('client_send', {radius: parseFloat(this.state.radius)})
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 16,
    color: '#000099',
    marginTop: 10,
    marginBottom: 10,
  },
  output: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
});