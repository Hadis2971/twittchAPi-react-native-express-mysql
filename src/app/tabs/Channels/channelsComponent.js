import React, { PureComponent } from 'react';
import TabsWrapper from '../wrapper';
import { View, Text, FlatList, Image, Linking } from 'react-native';
import Channel from './channel';
import homeStyles from '../../../styles/home';

class ChannelsComponent extends PureComponent {

    constructor (props) {
      super(props);
      this.state = {
        channels: [],
        errors: false
      }
    }
  
    createChannelsList = (channels) => {
      return channels.map((channel) => {
        return <Channel 
          key={channel._id}
          src={channel.profile_banner}
          name={channel.name}
          description={channel.description}
          followers={channel.followers}
          views={channel.views}
          url={channel.url}
        />
      });
    }
  
    componentDidMount() {
      this.setState({
        channels: [],
        errors: false
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
  
    render () {
      const { channels, errors } = this.state;
      const { getChannelsStart, channelsError } = this.props;
      
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
            <FlatList
              data={channels}
              renderItem={({item}) => (
                <View style={homeStyles.infoContainer}>
                  <Image source={{ uri: item.props.src }} style={{ width: 75, height: 75 }} />
                  <Text style={homeStyles.text}>Channel Name: {item.props.name}</Text>
                  <Text style={homeStyles.text}>Description: {item.props.description}</Text>
                  <Text style={homeStyles.text}>Followers: {item.props.followers}</Text>
                  <Text style={homeStyles.text}>Views: {item.props.views}</Text>
                  <Text style={[homeStyles.text, { color: 'blue' }]}
                    onPress={() => Linking.openURL(item.props.url)}>
                      Watch
                  </Text>
                </View>
              )}
            />
          </View>
        </TabsWrapper>
      );
    }
  }
  
export default ChannelsComponent;
