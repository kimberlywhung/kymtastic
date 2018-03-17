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

        <Button
          title="go to home screen"
          onPress={ () => this.props.navigation.navigate('home') }
        />

        <Button
          title="go to info page"
          onPress={ () => this.props.navigation.navigate('info') }
        />

        <Button
          title="go to map page"
          onPress={ () => this.props.navigation.navigate('map') }
        />

        <Button
          title="go to post quiz page"
          onPress={ () => this.props.navigation.navigate('postQuiz') }
        />

        <MyCarousel />
      </View>
    );
  }
}

export default SplashPage;
