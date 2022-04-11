import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Icon from 'react-native-vector-icons/FontAwesome';

export const AddReview = ({navigation}) => {
  const [review, setReview] = useState({});

  const submitReview = () => {
    setReview({submitting: true});
    fetch('http://localhost:3000/review', {
      method: 'POST',
      body: JSON.stringify({
        name: review.name,
        rating: review.rating,
        comment: review.comment,
      }),
    })
      .then(response => response.json())
      .then(result => {
        navigation.goBack();
      });
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Icon name="close" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.addReview}>Add Review</Text>

        <TextInput
          style={styles.input}
          placeholder="Name (optional)"
          value={review.name}
          onChangeText={() => setReview(review.name)}
        />

        <Text style={styles.rating}>Your Rating:</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => {
            return (
              <TouchableOpacity
                onPress={() => setReview({rating: i})}
                style={styles.starButton}
                key={i}>
                <Icon
                  name={'star'}
                  color={review.rating >= i ? '#FFD64C' : '#CCCCCC'}
                  size={40}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <TextInput
          style={[styles.input, {height: 100}]}
          placeholder="Review"
          value={review.review}
          onChangeText={() => setReview(review.review)}
          multiline={true}
          numberOfLines={5}
        />

        <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fffbe6',
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 14,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
