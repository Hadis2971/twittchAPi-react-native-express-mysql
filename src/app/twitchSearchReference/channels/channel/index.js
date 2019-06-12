import React from 'react';
import { View, Image, Text } from 'react-native';
import channelStyles from '../../../../styles/channel';

const Channel = (props) => {
  return (
    <View style={channelStyles.container}>
      <View style={channelStyles.image}>
        <Image source={{ uri: props.src }} />
      </View>
      <View style={channelStyles.info}>
        <Text>Channel Name: {props.name}</Text>
        <Text>Description: {props.description}</Text>
        <Text>Followers: {props.followers}</Text>
        <Text>Views: {props.views}</Text>
      </View>
    </View>
  );
};

export default Channel;
