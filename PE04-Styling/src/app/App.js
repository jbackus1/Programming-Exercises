import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/user.png')}
            />
          </View>
          <View>
            <Text style={styles.cardName}>Xavier Backus</Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>Project Engineer</Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              Ember One is one of the Best MSPs that I have ever known, and I am glad to be in the postion that I am!
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'pink';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: 'red',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },
  cardImage: {
    width: 75,
    height: 75,
  },
  // --- Text styling (Section 4.3) ---
  cardName: {
    marginTop: 30,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  cardOccupationContainer: {
    marginTop: 10,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 5,
  },
  cardDescription: {
    marginTop: 10,
    marginHorizontal: 20,
    fontStyle: 'italic',
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 22,
  },
});