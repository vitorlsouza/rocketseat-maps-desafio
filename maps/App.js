import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {

  state={
    latitude: -22.2783085,
    longitude: -42.5353309,
  }

  render() {

    const { latitude, longitude } = this.state;
    return (
      <View style={styles.container}>
      <MapView
        ref={ map => this.mapView = map} 
        initialRegion={{
          latitude, 
          longitude,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0042,
        }}
        style={styles.map}
        rotateEnable={false}
        scrollEnable={false}
        zoomEnable={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
      />
      <Button 
        title='Mudar Localização'
        onPress={ () => {
         this.mapView.animateToCoordinate({
           latitude: -22.2797803,
           longitude: -42.5371092,
         }, 5000)
        }}
        style={styles.button}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 40,
    left: 0,
    right: 0
  },
  button: {
    flex: 1,
    marginTop: 20
  }
});
