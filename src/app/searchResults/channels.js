import React from 'react';
import { FlatList, Image, Text, View, Linking } from 'react-native';
import homeStyles from '../../../styles/home';

const SearchResults = (props) => {
  const { streams } = props;
  return (
    <View>
      <FlatList
        data={streams}
        renderItem={({ item }) => (
          <View style={homeStyles.infoContainer}>
            <Image source={{ uri: item.props.src }} style={{ width: 75, height: 75 }} />
            <Text>{`Game: ${item.props.game} Language: ${item.props.ln}`}</Text>
            <Text>{`Channel: ${item.props.name}`}</Text>
            <Text style={{ color: 'blue' }}
              onPress={() => Linking.openURL(item.props.url)}>
          Watch
            </Text>
          </View>
        )}
      />;
    </View>
  );
};

export default SearchResults;
