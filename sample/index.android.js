/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Game = require('./Game2048/Game2048');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30,
    margin: 80
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  }
});

var sample = React.createClass({
   render: function() {
     var helloWorld = <Text style={styles.text}>hello world</Text>
     return (
       <View style={styles.container}>
        //  {helloWorld}
        {Game}
       </View>

      //  <Navigator
      //    style={styles.container}
      //    initialRoute={{
      //      title: 'sample',
      //      name:'sample2',index:0
      //     //  component: Game
      //    }}
      //    renderScene={(route, navigator) =>
      //       <Game
      //         name={route.name}
      //         onForward={() => {
      //           var nextIndex = route.index + 1;
      //           navigator.push({
      //             name: 'Scene ' + nextIndex,
      //             index: nextIndex,
      //           });
      //         }}
      //         onBack={() => {
      //           if (route.index > 0) {
      //             navigator.pop();
      //           }
      //         }}
      //       />
      //     }
      //    />

     );
   }

});


AppRegistry.registerComponent('sample', () => sample);
