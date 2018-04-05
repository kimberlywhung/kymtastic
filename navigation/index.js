import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashPage from './splashPage';
import HomePage from './homePage';
import InfoPage from './infoPage';
import MapStyle from './mapPage';
import PostQuizPage from './postQuizPage';

let routeMap, navOptions;

routeMap = {
  splash: {
    screen: SplashPage
  },
  home: {
    screen: HomePage
  },
  info: {
    screen: InfoPage
  },
  map: {
    screen: MapStyle
  },
  postQuiz: {
    screen: PostQuizPage
  }
};

navOptions = {
  initialRouteName: 'map'
}

let Nav = StackNavigator(routeMap, navOptions);

export default Nav;
