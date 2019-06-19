import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import favChannelStyles from '../../styles/favChannel';
class FavChannelsComp extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      listOfChannels: [],
      offsetForLoadingFavChannels: 0
    };
  }

  async componentDidMount () {
    const { offsetForLoadingFavChannels } = this.state;
    const { userID } = this.props;
    const { getAllFavChannels } = this.props.actions;
    const newChannels = await getAllFavChannels(userID, offsetForLoadingFavChannels);
    this.setState((prevState) => ({
      listOfChannels: [...newChannels],
      offsetForLoadingFavChannels: (prevState.offsetForLoadingFavChannels + 5)
    }));
  }

  handleInfiniteScroll = async () => {
    const { offsetForLoadingFavChannels, listOfChannels } = this.state;
    const { getAllFavChannels } = this.props.actions;
    const { userID } = this.props;
    const newChannels = await getAllFavChannels(userID, offsetForLoadingFavChannels);
    let helpArr = [...listOfChannels];
    helpArr = helpArr.concat(newChannels);
    this.setState((prevState) => ({
      listOfChannels: [...helpArr],
      offsetForLoadingFavChannels: (prevState.offsetForLoadingFavChannels + 5)
    }));
  };

  render () {
    const { listOfChannels } = this.state;
    return (
      <View style={favChannelStyles.container}>
        <FlatList
          data={listOfChannels}
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          onEndReached={async () => {
            if (!this.onEndReachedCalledDuringMomentum) {
              await this.handleInfiniteScroll();
              this.onEndReachedCalledDuringMomentum = true;
            }
          }}
          onEndReachedThreshold={0}
          keyExtractor={item => (item.id + '')}
          renderItem={({ item }) => (
            <View style={favChannelStyles.itemContainer}>
              <Image source={{ uri: (item.image || 'http://textiletrends.in/gallery/1547020644No_Image_Available.jpg') }} style={favChannelStyles.imageStyle} />
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
