/∗∗ ∗ Name: Heng Shu Ming ∗ Reg. No. : 1500777 ∗/

import React, { Component } from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    TextInput,
    Text,
    View,
    ScrollView,
} from 'react-native';
import {
    InputWithLabel
} from './UI';
import { FloatingAction } from 'react-native-floating-action';

let common = require('./CommonData');
let SQLite = require('react-native-sqlite-storage');

type Props = {};
export default class DetailsScreen extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('headerTitle')
        };
    };

    constructor(props) {
        super(props)

        this.state = {
            hotspotsId: this.props.navigation.getParam('id'),
            hotspots: null,
        };

        this._query = this._query.bind(this);

        this.db = SQLite.openDatabase({ name: 'hotspotsdb', createFromLocation: '~db.sqlite' }, this.openDb, this.errorDb);
    }

    componentDidMount() {
        this._query();
    }

    _query() {
        this.db.transaction((tx) => {
            tx.executeSql('SELECT * FROM hotspots WHERE id = ?', [this.state.hotspotsId], (tx, results) => {
                if (results.rows.length) {
                    this.setState({
                        hotspots: results.rows.item(0),
                    })
                }
            })
        });
    }

    openDb() {
        console.log('Database opened');
    }

    errorDb(err) {
        console.log('SQL Error: ' + err);
    }

    render() {
        let hotspots = this.state.hotspots;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <InputWithLabel style={styles.output}
                        label={'SSID'}
                        value={hotspots ? hotspots.ssid : ''}
                        orientation={'vertical'}
                        editable={false}
                    />
                    <InputWithLabel style={styles.output}
                        label={'Passphrase'}
                        value={hotspots ? hotspots.passphrase : ''}
                        orientation={'vertical'}
                        editable={false}
                    />
                    <InputWithLabel style={styles.output}
                        label={'Security'}
                        value={hotspots ? hotspots.security : ''}
                        orientation={'vertical'}
                        editable={false}
                    />
                    <InputWithLabel style={styles.output}
                        label={'Location Type'}
                        value={hotspots ? hotspots.location_type : ''}
                        orientation={'vertical'}
                        editable={false}
                    />
                </ScrollView>
            </View>
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