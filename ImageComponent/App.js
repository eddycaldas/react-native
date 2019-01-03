import React, { Component } from 'react';

import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

import rosePink from './assets/rosePink.jpg';
import world from './assets/world.jpeg';

export default class ImageComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={rosePink}/>
          <Text style={styles.userName}>Pink Rose</Text>
        <Image style={styles.pic} source={world}/>
          <Text style={styles.userName}>Hello World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pic: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
  userName: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    fontSize: 30,
    color: 'white'
  }
})