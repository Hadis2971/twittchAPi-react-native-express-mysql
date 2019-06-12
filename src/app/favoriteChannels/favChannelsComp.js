import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import favChannelStyles from '../../styles/favChannel';
class FavChannelsComp extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      listOfChannels: []
    };
  }

  async componentDidMount () {
    const { userID } = this.props;
    const { getAllFavChannels } = this.props.actions;
    await getAllFavChannels(userID);
  }

  componentWillReceiveProps (nextProps) {
    const { listOfChannels } = this.state;
    if (listOfChannels.length !== nextProps.channels.length) {
      this.setState({
        listOfChannels: [...nextProps.channels]
      });
    }
  }

  render () {
    const { listOfChannels } = this.state;
    return (
      <View style={favChannelStyles.container}>
        <FlatList
          data={listOfChannels}
          renderItem={({ item }) => (
            <View style={favChannelStyles.itemContainer}>
              <Image source={{ uri: item.image }} style={favChannelStyles.imageStyle} />
              <Text style={favChannelStyles.infoItem}>{item.channel}</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL(item.url)}
              >
                <Text style={favChannelStyles.infoItem}>Watch</Text>
              </TouchableOpacity>
            </View>
          )}
        />

      </View>
    );
  }
}

export default FavChannelsComp;
