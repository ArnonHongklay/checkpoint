import React from 'react';

import createStore from './store/createStore';
import Container from './containers';

export default class Root extends React.Component {
  renderApp() {
    const initialState = window.___INTITIAL_STATE__;
    const store = createStore(initialState);

    return <Container store={store} />;
  }

  render() {
    return this.renderApp();
  }
}
