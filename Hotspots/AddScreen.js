/∗∗ ∗ Name: Heng Shu Ming ∗ Reg. No. : 1500777 ∗/

import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    ScrollView
} from 'react-native';
import {
    InputWithLabel,
    PickerWithLabel,
    AppButton,
} from './UI';

let common = require('./CommonData');
let SQLite = require('react-native-sqlite-storage');

type Props = {};
export default class AddScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Add Hotpots',
    };

    constructor(props) {
        super(props)

        this.state = {
            ssid: '',
            passphrase: '',
            security: '',
            location_type: ''
        };

        this._insert = this._insert.bind(this);

        this.db = SQLite.openDatabase({ name: 'hotspotsdb', createFromLocation: '~db.sqlite' }, this.openDb, this.errorDb);
    }

    _insert() {
        this.db.transaction((tx) => {
            tx.executeSql('INSERT INTO hotspots(ssid,passphrase,security,location_type) VALUES(?,?,?,?)', [
                this.state.ssid,
                this.state.passphrase,
                this.state.security,
                this.state.location_type
            ]);
        });

        this.props.navigation.getParam('refresh')();
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <InputWithLabel style={styles.input}
                    label={'SSID'}
                    value={this.state.ssid}
                    onChangeText={(ssid) => { this.setState({ ssid }) }}
                    orientation={'vertical'}
                />
                <InputWithLabel style={styles.input}
                    label={'Passphrase'}
                    value={this.state.passphrase}
                    onChangeText={(passphrase) => { this.setState({ passphrase }) }}
                    orientation={'vertical'}
                />
                <PickerWithLabel style={styles.picker}
                    label={'Security'}
                    items={common.security}
                    mode={'dialog'}
                    value={this.state.security}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({ security: itemValue })
                    }}
                    orientation={'vertical'}
                    textStyle={{ fontSize: 24 }}
                />
                <PickerWithLabel style={styles.picker}
                    label={'Location Type'}
                    items={common.location_type}
                    mode={'dialog'}
                    value={this.state.location_type}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({ location_type: itemValue })
                    }}
                    orientation={'vertical'}
                    textStyle={{ fontSize: 24 }}
                />
                <AppButton style={styles.button}
                    title={'Save'}
                    theme={'primary'}
                    onPress={this._insert}
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
    picker: {
        color: '#000099',
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
    },
});