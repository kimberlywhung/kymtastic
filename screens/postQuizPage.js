import React, { Component } from 'react';
import { View, Text, WebView, Button } from 'react-native';

class PostQuizPage extends Component {
  _onMessage(msg) {
    console.log('hm')
    this.props.navigation.navigate('splash');
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://gsu.qualtrics.com/jfe/form/SV_dhyFHB9XcVJZlxb'}}
        ref={(ref) => { this.webView = ref; }}
        onMessage={this._onMessage.bind(this)}
      />
    );
  }
}

export default PostQuizPage;
