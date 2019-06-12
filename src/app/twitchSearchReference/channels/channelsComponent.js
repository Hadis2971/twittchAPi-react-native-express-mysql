import React, { PureComponent } from 'react';
import TabsWrapper from '../wrapper';
import { View, Text, FlatList, Image, Linking, Button } from 'react-native';
import Alert from '../../common/alert';
import Spinner from 'react-native-loading-spinner-overlay';
import Channel from './channel';
import homeStyles from '../../../styles/home';
import spinnerStyles from '../../../styles/spinner';
import alertStyle from '../../../styles/alert';

class ChannelsComponent extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      channels: [],
      errors: false,
      showMyAlert: false
    }
  }

  createChannelsList = (channels) => {
    const { userID } = this.props;
    return channels.map((channel) => {
      return {
        key: channel._id,
        src:channel.profile_banner,
        name:channel.name,
        description:channel.description,
        followers:channel.followers,
        views:channel.views,
        url:channel.url,
        userID
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.channelsError) {
      this.setState({
        errors: true
      });
      return;
    }
    const channelsList = this.createChannelsList(nextProps.channels);
    this.setState({
      channels: [...channelsList]
    });
  }
  
  submitSearchHandler = async ({ searchTerm }) => {
    const { getChannels } = this.props.actions;
    if (!searchTerm) return;
    const path = `channels?query=${searchTerm}`
    await getChannels(path);
  }

  hideAlert = () => {
    this.setState({
      errors: false
    });
  };

  hideMyAlert = () => {
    this.setState({
      addChannelError: false
    });
  };

  addNewChannelToFavorites = async (data) => {
    const { addChannelToFavorites } = this.props.actions;
    const addChannelToFavoritesResult = await addChannelToFavorites(data);
    if (!addChannelToFavoritesResult) {
      this.setState({
        showMyAlert: true
      })
    } else {
      this.setState({
        showMyAlert: false
      })
    }
  };

  render () {
    const { channels, errors, showMyAlert } = this.state;
    const { getChannelsStart, channelsError, addChannelToFavoritesStart, userID, addChannelError } = this.props;
    return (
      <TabsWrapper 
        errors={errors} 
        isVisible={getChannelsStart} 
        alertTitle='Search For Channels Error'
        errorMsg={channelsError}
        searchTitle='Search For Channels'
        submitSearchHandler={this.submitSearchHandler}
        hideAlert={this.hideAlert}
        >
        <View style={homeStyles.resultsContainer}>
        {addChannelError && <View style={alertStyle.container}>
          <Alert 
            showMyAlert={showMyAlert} 
            title='Error' 
            message={addChannelError}
            hideMyAlert={this.hideMyAlert}
            confirmText='OK'
            buttonColor='#DD6B55'
            />
        </View>}
        <Spinner
          visible={addChannelToFavoritesStart}
          textContent={'Please Wait...'}
          textStyle={spinnerStyles.spinnerTextStyle}
        />
          <FlatList
            data={channels}
            renderItem={({item}) => (
              <View style={homeStyles.infoContainer}>
                <Image source={{ uri: item.src }} style={{ width: 75, height: 75 }} />
                <Text style={homeStyles.text}>Channel Name: {item.name}</Text>
                <Text style={homeStyles.text}>Description: {item.description}</Text>
                <Text style={homeStyles.text}>Followers: {item.followers}</Text>
                <Text style={homeStyles.text}>Views: {item.views}</Text>
                <Text style={[homeStyles.text, { color: 'blue' }]}
                  onPress={() => Linking.openURL(item.url)}>
                    Watch
                </Text>
                <Button 
                  onPress={() => this.addNewChannelToFavorites({
                    user: item.userID,
                    channel: item.name,
                    image: item.src,
                    url: item.url
                  })}
                  title='Add To Favorites'
                  color='#3399ff'
                />
              </View>
            )}
          />
        </View>
      </TabsWrapper>
    );
  }
}
  
export default ChannelsComponent;
