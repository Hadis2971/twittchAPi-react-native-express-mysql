import React from 'react';
import { View, Image, Text } from 'react-native';
import streamStyles from '../../../../styles/stream';

const Game = (props) => {
  return (
    <View style={streamStyles.container}>
      <View style={streamStyles.image}>
        <Image source={{ uri: props.src }} />
      </View>
      <View style={streamStyles.info}>
        <Text>Game: {props.name}</Text>
        <Text>Popularity: {props.popularity}</Text>
      </View>
    </View>
  );
};

export default Game;
