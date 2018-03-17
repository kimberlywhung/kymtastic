import React from 'react';
import { View, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';

let items = [{
  title: 'thing 1'
}, {
  title: 'thing 2'
}, {
  title: 'thing 3'
}];

class MyCarousel extends React.Component {
  _renderItem (item/*, index*/) {
    return (
      <View>
        <Text>
          { item.title }
        </Text>
      </View>
    );
  }

  render() {
    this._items = items;

    return (
      <Carousel
        ref={ (c) => {this._carousel = c;} }
        renderItem={this._renderItem}
        data={this._items}
      />
    );
  }
}

export default MyCarousel;
