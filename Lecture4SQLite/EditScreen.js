import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  InputWithLabel,
  PickerWithLabel,
  AppButton,
} from './UI'

let common = require('./CommonData');
let SQLite = require('react-native-sqlite-storage');

type Props = {};
export default class EditScreen extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Edit: ' + navigation.getParam('headerTitle')
    };
  };

  constructor(props) {
    super(props)

    this.state = {
      studentId: this.props.navigation.getParam('id'),
      name: '',
      email: '',
      state: '',
    };

    this._query = this._query.bind(this);
    this._update = this._update.bind(this);

    this.db = SQLite.openDatabase({name: 'studentdb', createFromLocation : '~db.sqlite'}, this.openDb, this.errorDb);
  }

  componentDidMount() {
    this._query();
  }

  _query() {
    this.db.transaction((tx) => {
      tx.executeSql('SELECT * FROM students WHERE id = ?', [this.state.studentId], (tx, results) => {
        if(results.rows.length) {
          this.setState({
            name: results.rows.item(0).name,
            email: results.rows.item(0).email,
            state: results.rows.item(0).state,
          })
        }
      })
    });
  }

  _update() {
    this.db.transaction((tx) => {
      tx.executeSql('UPDATE students SET name=?,email=?,state=? WHERE id=?', [
        this.state.name,
        this.state.email,
        this.state.state,
        this.state.studentId,
      ]);
    });

    this.props.navigation.getParam('refresh')();
    this.props.navigation.getParam('homeRefresh')();
    this.props.navigation.goBack();
  }

  openDb() {
      console.log('Database opened');
  }

  errorDb(err) {
      console.log('SQL Error: ' + err);
  }

  render() {
    let student = this.state.student;

    return (
      <ScrollView style={styles.container}>
        <InputWithLabel style={styles.input}
          label={'Name'}
          value={this.state.name}
          onChangeText={(name) => {this.setState({name})}}
          orientation={'vertical'}
        />
        <InputWithLabel style={styles.input}
          label={'Email'}
          value={this.state.email}
          onChangeText={(email) => {this.setState({email})}}
          keyboardType={'email-address'}
          orientation={'vertical'}
        />
        <PickerWithLabel style={styles.picker}
          label={'State'}
          items={common.states}
          mode={'dialog'}
          value={this.state.state}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({state: itemValue})
          }}
          orientation={'vertical'}
          textStyle={{fontSize: 24}}
        />
        <AppButton style={styles.button}
          title={'Save'}
          theme={'primary'}
          onPress={this._update}
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
  output: {
    fontSize: 24,
    color: '#000099',
    marginTop: 10,
    marginBottom: 10,
  },
});