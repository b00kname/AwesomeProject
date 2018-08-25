import React, { Component } from 'react';
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableNativeFeedback,
  View
} from 'react-native';
import openMap from 'react-native-open-maps';

async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Geolocation Permission Required',
                'message': 'This app needs to access your device location',
            }
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Location permission granted')
        }
        else {
            console.log('Location permission denied')
        }

        return granted
    }
    catch (err) {
        console.warn(err)
    }
}


export default class App extends Component<Props> {
  constructor(props) {
      super(props)

      this.state = {
          granted: PermissionsAndroid.RESULTS.DENIED,
          position: null,
      };

      this.readLocation = this.readLocation.bind(this)
      this.onPress = this.onPress.bind(this)
  }

 componentDidMount() {
     let granted = requestLocationPermission();

     this.setState({
         granted: granted,
     })

     if(granted) this.readLocation()
 }

 componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
 }

 readLocation() {
     navigator.geolocation.getCurrentPosition(
         (position) => this.setState({position}),
         (error) => console.log(error.message),
         {
             enableHighAccuracy: true,
             timeout: 20000,
             maximumAge: 1000
         }
     );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({position});
    });
 }

 onPress() {
     if(this.state.position) {
         openMap({
             latitude: this.state.position.coords.latitude,
             longitude: this.state.position.coords.longitude,
         })
     }
     else {
         ToastAndroid.show('Location is unknown!', ToastAndroid.LONG);
     }
 }

  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.label}>
              Longitude
            </Text>
            <Text style={styles.data}>
              { this.state.position ? this.state.position.coords.longitude : 'unknown' }
            </Text>
        </View>
        <View>
            <Text style={styles.label}>
              Latitude
            </Text>
            <Text style={styles.data}>
              { this.state.position ? this.state.position.coords.latitude : 'unknown' }
            </Text>
        </View>
        <View>
            <Text style={styles.label}>
              Altitude
            </Text>
            <Text style={styles.data}>
              { this.state.position ? this.state.position.coords.altitude : 'unknown' }
            </Text>
        </View>
        <TouchableNativeFeedback onPress={this.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Open in Maps
                </Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#a80000',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  label: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  data: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});