import React from 'react';

import {Text, View} from 'react-native';

import HeaderStyle from '../../styles/HeaderStyle';

export const Header = () => {
  return (
    <View style={HeaderStyle.header}>
      <Text
        style={{
          fontSize: 30,
        }}>
        resto
      </Text>
      <Text
        style={{
          color: '#0ca860',
          fontSize: 30,
        }}>
        Review
      </Text>
    </View>
  );
};
