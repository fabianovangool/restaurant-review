import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';

import CutleryImage from 'images/cutlery.png';

import {FlatList, StyleSheet, TextInput, View, Image} from 'react-native';

const App = () => {
  const [searchFilter, setSearchFilter] = useState();
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    axios
      .get('http://localhost:3004/restaurants')
      .then(result => setRestaurants(result.data));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          marginTop: 60,
          alignItems: 'center',
        }}>
        <Image
          source={CutleryImage}
          style={{
            backgroundColor: '#0ca860',
            borderRadius: 4,
            width: 55,
            height: 55,
          }}
        />
      </View>
      <Header />

      <TextInput
        style={styles.input}
        placeholder="Live Search"
        onChangeText={text => {
          setSearchFilter(text);
        }}
        value={searchFilter}
      />

      <FlatList
        data={restaurants.filter(place => {
          return (
            !searchFilter ||
            place.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
          );
        })}
        renderItem={({item, index}) => (
          <RestaurantRow place={item} index={index} />
        )}
        keyExtractor={item => item.name}
        initialNumToRender={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#0ca860',
    backgroundColor: '#edfff4',
  },
});

export default App;
