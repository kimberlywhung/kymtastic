import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashPage from './splashPage';

let Nav = StackNavigator({
  splash: {
    screen: SplashPage
  }
});

export default Nav;
