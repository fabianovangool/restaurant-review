import React from 'react';

import {Text, View} from 'react-native';

import HeaderStyle from 'styles/HeaderStyle';

const Header = () => {
  return (
    <View style={HeaderStyle.header}>
      <Text
        style={{
          fontSize: 26,
        }}>
        resto
      </Text>
      <Text
        style={{
          color: '#0ca860',
          fontSize: 26,
        }}>
        Review
      </Text>
    </View>
  );
};

export default Header;
