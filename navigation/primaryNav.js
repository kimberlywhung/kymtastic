import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TabNav from './tabNav';

let
  routeMap,
  options,
  PrimaryNav;

routeMap = {
  tabs: { screen: TabNav }
};

options = {
  initialRouteName: 'tabs'
};

PrimaryNav = StackNavigator(routeMap);

export default PrimaryNav;
