import React from 'react';
import { View, Image, Text, Linking, Button } from 'react-native';
import channelStyles from '../../../../styles/channel';
import homeStyles from '../../../../styles/home';
const Channel = (props) => {
  const { item, userID, addNewChannelToFavorites } = props;
  return (
    <View style={homeStyles.infoContainer}>
      <Image source={{ uri: item.logo }} style={{ width: 75, height: 75 }} />
      <Text style={homeStyles.text}>Channel Name: {item.display_name}</Text>
      <Text style={homeStyles.text}>Description: {item.description}</Text>
      <Text style={homeStyles.text}>Followers: {item.followers}</Text>
      <Text style={homeStyles.text}>Views: {item.views}</Text>
      <Text style={[homeStyles.text, { color: 'blue' }]}
        onPress={() => Linking.openURL(item.url)}>
                    Watch
      </Text>
      <Button
        onPress={() => addNewChannelToFavorites({
          user: (userID - 0),
          channel: item.name,
          image: item.logo,
          url: item.url
        })}
        title='Add To Favorites'
        color='#3399ff'
      />
    </View>
    /*
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
    </View> */
  );
};

export default Channel;
