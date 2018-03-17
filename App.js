import React from 'react';
import { StackNavigator } from 'react-navigation';
// import { StyleSheet, Text, View } from 'react-native';

import Nav from './navigation';

class AppRoot extends React.Component {
  render() {
    return <Nav />;
  }
}

export default AppRoot;

// export default Nav;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View /* style={styles.container} */>
//         <Text>hey there!</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
