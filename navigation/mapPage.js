import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import MapView, { ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');


let
  aspectRatio = width / height,
  lat = 33.794472,
  long = -84.395500,
  latDelta= 0.0922,
  longDelta = latDelta * aspectRatio;

class MapStyle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: latDelta,
            longitudeDelta: longDelta,
          }}
        />
      </View>
    );
  }
}

MapStyle.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapStyle;
