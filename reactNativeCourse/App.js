
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {

    state = {
      placeName: "",
      places: []
    };

    placeNameChangedHandler = (val) => {
      this.setState({
        placeName: val
      })
    }

    placeSubmitHandler = () => {
      if (this.state.placeName.trim() === '') {
        return;
      }
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        }
      })
    }

  render() {

    const placesOutput = this.state.places.map((place, i) => (
        <ListItem key={i} showPlace={place} />     
    ))

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            placeholder="Give it a try"
            style={styles.placeInput}
            onPress={this.placeNameSubmitHandler}
          />
          <Button 
          style={styles.placeButton}
          title="Add me"
          onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.viewContainer}> 
               {placesOutput} 
        </View>
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
  },
  inputContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    alignContent: "center"
  },
  placeButton: {
    width: '30%'
  },
  viewContainer: {
    width: '100%'
  }
});
