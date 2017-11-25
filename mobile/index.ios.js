/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Root from './src/main';

export default class YoloHuntMaps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('YoloHuntMaps', () => YoloHuntMaps);
