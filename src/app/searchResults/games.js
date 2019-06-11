import React from 'react';
import { FlatList, Image, Text, View, Linking } from 'react-native';
import homeStyles from '../../styles/home';

const SearchResultsGames = (props) => {
  const { streams } = props;
  return (
    <View style={homeStyles.container}>
      <FlatList
        onEndReached={() => console.log('endEndendEnd')}
        data={streams}
        renderItem={({ item }) => (
          <View style={homeStyles.infoContainer}>
            <Image source={{ uri: item.props.src }} style={{ width: 100, height: 100 }} />
            <Text>{`Game: ${item.props.game}`}</Text>
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

export default SearchResultsGames;
