import React from 'react';
import { View, Image, Text } from 'react-native';
import streamStyles from '../../../../styles/stream';

const Stream = (props) => {
  return (
    <View style={streamStyles.container}>
      <View style={streamStyles.image}>
        <Image source={{ uri: props.src }} />
      </View>
      <View style={streamStyles.info}>
        <Text>Game: {props.game}</Text>
        <Text>Gamer: {props.name}</Text>
        <Text>Language: {props.ln}</Text>
        <Text>Watch</Text>
      </View>
    </View>
  );
};

export default Stream;
