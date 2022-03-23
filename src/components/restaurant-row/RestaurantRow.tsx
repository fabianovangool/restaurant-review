import React, {useState} from 'react';

import {Stars} from '../stars';

import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';

export const RestaurantRow = ({place, index}) => {
  const [showInfo, setShowInfo] = useState(false);
  const infoPressed = () => {
    setShowInfo(!showInfo);
  };

  return (
    <View
      key={place.name}
      style={{backgroundColor: index % 2 === 0 ? 'white' : '#f0fff5'}}>
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
            onPress={infoPressed}
            style={styles.button}
            underlayColor="white">
            <Text style={styles.buttonText}>info</Text>
          </TouchableHighlight>
        </View>
      </View>

      {showInfo && (
        <View style={styles.info}>
          <Text>This resto is pretty coolio</Text>
          <Image
            source={{uri: `http://localhost:3004/images/${place.image}`}}
            style={{
              flex: 1,
              width: 35,
              height: 35,
            }}
          />
        </View>
      )}
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
    backgroundColor: '#2eff9e',
  },
  buttonText: {
    fontSize: 14,
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
    color: '#0ca860',
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
