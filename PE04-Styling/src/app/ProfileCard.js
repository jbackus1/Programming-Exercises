import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// One profile card. `expanded` switches between the thumbnail and full-size styles.
export default function ProfileCard({ expanded, onPress }) {
  const s = expanded ? big : small;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[base.card, s.card]}>
        <View style={[base.imageContainer, s.imageContainer]}>
          <Image style={s.image} source={require('../../assets/user.png')} />
        </View>
        <Text style={[base.name, s.name]}>Xavier Backus</Text>
        <View style={base.occupationContainer}>
          <Text style={[base.occupation, s.occupation]}>
            Project Engineer
          </Text>
        </View>
        <Text style={[base.description, s.description]}>
          Ember One is one of the Best MSPs that I have ever known, and I am glad to be in the postion that I am!
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// Styles shared by both sizes
const base = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: 'pink',
    borderColor: 'blue',
    borderStyle: 'solid',
    // shadow (iOS) + elevation (Android)
    shadowColor: 'blue',
    shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 8,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  occupationContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  occupation: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontStyle: 'italic',
    textAlign: 'left',
  },
});

// Thumbnail size
const small = StyleSheet.create({
  card: { width: 150, height: 200, borderWidth: 2, borderRadius: 12 },
  imageContainer: {
    width: 60, height: 60, borderRadius: 30, borderWidth: 2,
    marginTop: 14, paddingTop: 7,
  },
  image: { width: 40, height: 40 },
  name: { fontSize: 12, marginTop: 8 },
  occupation: { fontSize: 8, paddingBottom: 2 },
  description: { fontSize: 7, marginTop: 5, marginHorizontal: 10 },
});

// Expanded size (about 2x the thumbnail)
const big = StyleSheet.create({
  card: { width: 300, height: 400, borderWidth: 3, borderRadius: 20 },
  imageContainer: {
    width: 120, height: 120, borderRadius: 60, borderWidth: 3,
    marginTop: 30, paddingTop: 15,
  },
  image: { width: 80, height: 80 },
  name: { fontSize: 24, marginTop: 20 },
  occupation: { fontSize: 16, paddingBottom: 4 },
  description: { fontSize: 16, marginTop: 10, marginHorizontal: 20, lineHeight: 22 },
});