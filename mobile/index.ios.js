/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import NavigationBar from 'react-native-navbar';
// import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 101.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SAMPLE_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export default class YoloHuntMaps extends Component {
  state = {
    region: SAMPLE_REGION,
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View>
        <NavigationBar
          title={{ title: 'YoloHunt Maps', tintColor: 'black' }}
          leftButton={{ title: '' }}
          rightButton={{ title: 'Add' }}
          style={{ backgroundColor: 'white' }}
          statusBar={{ tintColor: 'white' }}
        />
        {/* <MapView
          style={styles.welcome}
          onRegionChange={() => {}}
          onRegionChangeComplete={() => {}}
          showsUserLocation
        /> */}
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
  welcome: {
    width: 375,
    height: 600,
  },
});

AppRegistry.registerComponent('YoloHuntMaps', () => YoloHuntMaps);
