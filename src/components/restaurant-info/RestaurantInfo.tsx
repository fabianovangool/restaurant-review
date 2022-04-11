import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Stars} from '../stars';

export const RestaurantInfo = ({route, navigation}) => {
  const {place} = route.params;
  return (
    <ScrollView style={styles.root}>
      <View style={styles.infoHeader}>
        <Image
          source={{uri: `http://localhost:3004/images/${place.image}`}}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.info}>
          <Text style={styles.name}>{place.name}</Text>
          <Text style={styles.address}>{place.address}</Text>
          <Stars rating={place.rating} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AddReview')}
            underlayColor="white">
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 14,
    paddingVertical: 3,
    backgroundColor: 'white',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#de5c00',
    fontWeight: '600',
    textAlign: 'center',
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoHeader: {
    flexDirection: 'row',
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  address: {
    color: '#997f00',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
