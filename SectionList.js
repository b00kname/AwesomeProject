import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SectionList,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      destinations: [],
    }
  }

  componentDidMount() {
    /**
     * In a real mobile app, we will fetch data from a data source
     * such as a file, database or from the cloud.
     *
     * In this demo, we simply hard-code the data here.
     */
    let destinations = [
      {
        country: 'Australia',
        airports: [
          {
            code: 'BNE',
            name: 'Brisbane',
          },
          {
            code: 'OOL',
            name: 'Gold Coast',
          },
          {
            code: 'MEL',
            name: 'Melbourne',
          },
          {
            code: 'PER',
            name: 'Perth',
          },
          {
            code: 'SYD',
            name: 'Sydney',
          },
        ]
      },
      {
        country: 'China',
        airports: [
          {
            code: 'PEK',
            name: 'Beijing',
          },
          {
            code: 'HGH',
            name: 'Hangzhou',
          },
          {
            code: 'KMG',
            name: 'Kunming',
          },
          {
            code: 'PVG',
            name: 'Shanghai',
          },
          {
            code: 'TSN',
            name: 'Tianjin',
          },
        ]
      },
      {
        country: 'Malaysia',
        airports: [
          {
            code: 'BKI',
            name: 'Kota Kinabalu',
          },
          {
            code: 'KUL',
            name: 'Kuala Lumpur',
          },
          {
            code: 'KCH',
            name: 'Kuching',
          },
          {
            code: 'PEN',
            name: 'Penang',
          },
        ]
      },
      {
        country: 'New Zealand',
        airports: [
          {
            code: 'AKL',
            name: 'Auckland',
          },
          {
            code: 'CHC',
            name: 'Christchurch',
          },
        ]
      },
    ];

    /**
     * Set the state 'destinations' with data "fetched" from data source
     * in the format required for SectionList
     *
     * [{ title: 'Section Title', data: [...]}, {...}, ...]
     *
     */
    let sections = [];
    for(let i = 0; i < destinations.length; i++) {
      sections.push({
        title: destinations[i].country,
        data: destinations[i].airports,
      });
    }

    this.setState({
      destinations: sections,
    })
  }

  render() {
    console.log(this.state.destinations)
    return (
      <View style={styles.container}>
        <SectionList
          sections={ this.state.destinations }
          renderSectionHeader={ ({section}) =>
            <Text style={styles.header}>
              { section.title }
            </Text>
          }
          renderItem={({item}) =>
            <TouchableHighlight
              underlayColor={'#cccccc'}
              onPress={ () => {
                Alert.alert(`You pressed on Destination:
${item.name} (${item.code})`)
              }}
            >
              <View style={styles.item}>
                <Text style={styles.itemName}>
                  { `${item.name} (${item.code})` }
                </Text>
              </View>
            </TouchableHighlight>
          }
          keyExtractor={(item) => {item.code}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor : 'red',
    fontSize : 24,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  item: {
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemCode: {
    fontSize: 18,
  }
});