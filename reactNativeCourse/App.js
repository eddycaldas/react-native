
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {

    state = {
      places: []
    };

    placeAddedHandler = (placeName) => {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({
            key: Math.random(), 
            value:placeName
          })
        }
      })
    }

    placeDeleteHandler = key => {
      this.setState(prevState => {
        return {
          places: prevState.places.filter(place => {
            return place.key !== key;
        })
        }
      })
    }

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places}
          onItemDeleted={this.placeDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
