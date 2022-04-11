import React from 'react';

import {Stars} from '../stars';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export const RestaurantRow = ({place, index, navigation}) => {
  return (
    <View
      key={place.name}
      style={{backgroundColor: index % 2 === 0 ? 'white' : '#fffbe6'}}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={place.rating} />
        </View>

        <View style={styles.nameAddress}>
          <Text>{place.name}</Text>
          <Text style={styles.addressText}>{place.address}</Text>
        </View>

        <View style={styles.edges}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Info', {place})}
            style={styles.button}
            underlayColor="white">
            <Text style={styles.buttonText}>i</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 14,
    color: '#de5c00',
    fontWeight: '600',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0ca860',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
  nameAddress: {
    flexDirection: 'column',
    flex: 8,
  },
  addressText: {
    color: '#997f00',
  },
  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50,
  },
});
