/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';

registerScreens();

const navigatorStyle = {
  navBarTranslucent: true,
  drawUnderNavBar: true,
  navBarTextColor: '#ffffff',
  navBarButtonColor: '#ffffff',
  statusBarTextColorScheme: 'light',
};

const iconInsets = {
  top: 6,
  left: 0,
  bottom: -6,
  right: 0,
};

class App extends Component {
  constructor(props) {
    super(props);

    iconsLoaded.then(() => {
      this.startApp();
    });
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          title: 'Guide',
          screen: 'MapScreen',
          icon: iconsMap['ios-pin-outline'],
          selectedIcon: iconsMap['ios-pin'],
          navigatorStyle,
          iconInsets,
          navigatorButtons: {
            rightButtons: [
              {
                title: 'Search',
                id: 'search',
                icon: iconsMap['ios-search'],
              },
            ],
          },
        },
        {
          screen: 'Screen1',
          icon: iconsMap['ios-settings-outline'],
          selectedIcon: iconsMap['ios-settings'],
          // navigatorStyle,
          iconInsets,
        },
      ],
      tabsStyle: {
        tabBarButtonColor: 'white',
        tabBarSelectedButtonColor: 'white',
        tabBarBackgroundColor: 'black',
      },
    });
  }
}

export default App;
