import React from 'react';
import { View, Text, Button } from 'react-native';

import MyCarousel from '../myCarousel';

class SplashPage extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Splash Page
        </Text>

        <MyCarousel />
      </View>
    );
  }
}

export default SplashPage;
