import React from 'react';
import { FlatList, Image, Text, View, Linking } from 'react-native';
import homeStyles from '../../styles/home';

const SearchResultsStreams = (props) => {
  const { streams, type } = props;
  if (type) {
    return (
      <View style={homeStyles.container}>
        <FlatList
          // onEndReached={() => console.log('endEndendEnd')}
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
  }
};

export default SearchResultsStreams;
