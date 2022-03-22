import React, {useState} from 'react';

import Icon from 'react-native-vector-icons';

import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';

const RestaurantRow = ({place, index}) => {
  const [showInfo, setShowInfo] = useState(false);
  const infoPressed = () => {
    setShowInfo(!showInfo);
  };

  return (
    <View
      key={place.name}
      style={{backgroundColor: index % 2 === 0 ? 'white' : '#f0fff5'}}>
      <View style={styles.row}>
        <View style={styles.edges}>{/* <Icon name="star" /> */}</View>

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
          <Text>Restaurant info</Text>
          <Image
            source={require('images/star.png')}
            style={{
              flex: 1,
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
    borderColor: '#0ca860',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: 'white',
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
});

export default RestaurantRow;
