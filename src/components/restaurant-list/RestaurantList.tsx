import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Header} from '../header';
import {RestaurantRow} from '../restaurant-row';

import CutleryImage from '../../../public/images/cutlery.png';

import {FlatList, StyleSheet, TextInput, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const RestaurantList = () => {
  const [searchFilter, setSearchFilter] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();

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
        backgroundColor: '#fff08c',
      }}>
      <View
        style={{
          marginTop: 60,
          alignItems: 'center',
        }}>
        <Image
          source={CutleryImage}
          style={{
            backgroundColor: '#ffe226',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'black',
            width: 55,
            height: 55,
          }}
        />
      </View>
      <Header />

      <TextInput
        style={styles.input}
        placeholder="Search restaurant.."
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
          <RestaurantRow place={item} index={index} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
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
    borderColor: 'black',
    backgroundColor: '#fffbe6',
  },
});
