import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import streamStyles from '../../../../styles/stream';
import homeStyles from '../../../../styles/home';
const Stream = (props) => {
  const { item } = props;
  return (
    <View style={homeStyles.infoContainer}>
      <Image source={{ uri: item.channel.profile_banner }} style={{ width: 75, height: 75 }} />
      <Text style={homeStyles.text}>{`Game: ${item.channel.game} Language: ${item.channel.broadcaster_language}`}</Text>
      <Text style={homeStyles.text}>{`Channel: ${item.channel.display_name}`}</Text>
      <Text style={[homeStyles.text, { color: 'blue' }]}
        onPress={() => Linking.openURL(item.channel.url)}>
                      Watch
      </Text>
    </View>
  );
};

export default Stream;
