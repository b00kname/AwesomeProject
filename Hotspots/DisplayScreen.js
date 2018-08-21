/∗∗ ∗ Name: Heng Shu Ming ∗ Reg. No. : 1500777 ∗/

import React, { Component, PureComponent } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    FlatList,
    AppState,
} from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

const actions = [{
    text: 'Add',
    icon: require('./images/baseline_add_white_18dp.png'),
    name: 'add',
    position: 1
}];

let common = require('./CommonData');
let SQLite = require('react-native-sqlite-storage');

type Props = {};
export default class DisplayScreen extends Component {
    static navigationOptions = {
        title: 'Available Wifi Hotspots',
    };

    constructor(props) {
        super(props)

        this.state = {
            hotspots: [],
        };

        this._query = this._query.bind(this);

        this.db = SQLite.openDatabase({
            name: 'hotspotsdb',
            createFromLocation: '~db.sqlite'
        }, this.openDb, this.errorDb);
    }

    componentDidMount() {
        this._query();
    }

    _query() {
        this.db.transaction((tx) => {
            tx.executeSql('SELECT * FROM hotspots ORDER BY ssid', [], (tx, results) => {
                this.setState({
                    hotspots: results.rows.raw(),
                })
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
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.hotspots}
                    extraData={this.state}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) =>
                        <TouchableHighlight
                            underlayColor={'#cccccc'}
                            onPress={() => {
                                this.props.navigation.navigate('Datails', {
                                    id: item.id,
                                    headerTitle: item.ssid,
                                    refresh: this._query,
                                })
                            }}
                        >
                            <View style={styles.item}>
                                <Text style={styles.itemTitle}>{item.ssid}</Text>
                                <Text style={styles.itemTitle}>{item.security}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                    keyExtractor={(item) => { item.id.toString() }}
                />
                <FloatingAction
                    actions={actions}
                    overrideWithAction={true}
                    color={'#a80000'}
                    onPressItem={
                        () => {
                            this.props.navigation.navigate('Add', {
                                refresh: this._query,
                            })
                        }
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    item: {
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    itemTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: '#000',

    },
    itemSubtitle: {
        fontSize: 18,
    }
});