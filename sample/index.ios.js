/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var SearchPage = require('./SearchPage');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
  flex: 1
  }
});


class sample extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'sample',
          component: SearchPage
        }}/>
    );
  }
}



React.AppRegistry.registerComponent('sample', function() { return sample });
// AppRegistry.registerComponent('sample', () => sample);
