import React, { PureComponent } from 'react';
import TabsWrapper from '../wrapper';
import { View, Text, FlatList, Image, Linking } from 'react-native';
import Stream from './stream';
import homeStyles from '../../../styles/home';

class StreamsComponent extends PureComponent {

    constructor (props) {
      super(props);
      this.state = {
        streams: [],
        errors: false
      }
    }
  
    createStreamList = (streams) => {
      return streams.map((stream) => {
        return <Stream 
            key={stream._id}
            src={stream.channel.logo || stream.logo.small}
            game={stream.channel.game || stream.name}
            name={stream.channel.name || ''}
            ln={stream.channel.broadcaster_language || ''}
            url={stream.channel.url || ''}
        />
      });
    }
  
    hideAlert = () => {
      this.setState({
        errors: false
      });
    };
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.streamsErrors) {
        this.setState({
          errors: true
        });
        return;
      }
      const streamList = this.createStreamList(nextProps.streams);
      this.setState({
        streams: [...streamList]
      });
    }
   
    submitSearchHandler = async ({ searchTerm }) => {
      const { getStreams } = this.props.actions;
      if (!searchTerm) return;
      const path = `streams?query=${searchTerm}`;
      await getStreams(path);
    }
  
    render () {
      const { streams, errors } = this.state;
      const { getStreamsStart, streamsErrors } = this.props;
      
      return (
        <TabsWrapper
          errors={errors} 
          isVisible={getStreamsStart} 
          alertTitle='Search For Streams Error'
          errorMsg={streamsErrors}
          searchTitle='Search For Streams'
          submitSearchHandler={this.submitSearchHandler}
          hideAlert={this.hideAlert}
        >
          <View style={homeStyles.resultsContainer}>
            <FlatList
              data={streams}
              renderItem={({item}) => (
                <View style={homeStyles.infoContainer}>
                  <Image source={{ uri: item.props.src }} style={{ width: 75, height: 75 }} />
                  <Text style={homeStyles.text}>{`Game: ${item.props.game} Language: ${item.props.ln}`}</Text>
                  <Text style={homeStyles.text}>{`Channel: ${item.props.name}`}</Text>
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
  
export default StreamsComponent;
