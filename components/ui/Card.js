import { View, Text } from 'react-native';
import React from 'react';
import COLORS from './colors';

const Card = ({ children }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '80%',
        maxWidth: '95%',

        marginVertical: 10,
        borderRadius: 30,
        backgroundColor: COLORS.secondary,
        elevation: 6,
        paddingTop: 25
      }}
    >
      {children}
    </View>
  );
};

export default Card;
