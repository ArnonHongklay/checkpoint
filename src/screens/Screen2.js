import React, { Component } from 'react';
import Container from '../containers/index';

class Screen extends Component {
  render() {
    return <Container backgroundColor="#c95e0c" onPress={() => console.log('press')} />;
  }
}

export default Screen;
