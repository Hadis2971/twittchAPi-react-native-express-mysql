import React from 'react';
import { View, Image, Text } from 'react-native';
import streamStyles from '../../../../styles/stream';
import homeStyles from '../../../../styles/home';
const Game = (props) => {
  const { item } = props;
  return (
    <View style={homeStyles.infoContainer}>
      <Image source={{ uri: item.logo.small }} style={{ width: 75, height: 75 }} />
      <Text style={homeStyles.text}>{`Game: ${item.name} Popularity: ${item.popularity}`}</Text>
    </View>
  );
};

export default Game;
