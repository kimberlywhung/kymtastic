import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { HomePage } from '../screens';

let
  routeMap,
  options,
  TabNav;

routeMap = {
  home: {
    screen: HomePage,
    navigationOptions: {
      tabBarIcon: () => <Icon name='home' />
    }
  }
};

options = {
  initialRouteName: 'home',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true
  }
};


TabNav = TabNavigator(routeMap, options);

export default TabNav;
