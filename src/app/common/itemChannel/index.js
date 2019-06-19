import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import itemChannelStyles from '../../../styles/itemChannel';

const ItemChannel = (props) => {
  const { item } = props;
  return (
    <View style={itemChannelStyles.itemContainer}>
      <Image source={{ uri: (item.image || 'http://textiletrends.in/gallery/1547020644No_Image_Available.jpg') }} style={itemChannelStyles.imageStyle} />
      <Text style={itemChannelStyles.infoItem}>Channel: {item.channel}</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(item.url)}
      >
        <Text style={itemChannelStyles.infoItem}>Watch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemChannel;
