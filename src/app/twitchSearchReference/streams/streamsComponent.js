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
  
    renderStreamItem = ({ item }) => {
      return <Stream item={item}/>
    };

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

      this.setState({
        streams: [...nextProps.streams]
      });
    }
   
    submitSearchHandler = async ({ searchTerm }) => {
      const { getStreams } = this.props.actions;
      if (!searchTerm) return;
      const path = `streams?query=${searchTerm}`;
      await getStreams(path);
    }
  
    handleInfiniteScroll = () => {
      
    };

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
              onEndReached={this.handleInfiniteScroll}
              onEndReachedThreshold={0}
              data={streams}
              keyExtractor={(item) => (item._id + '')}
              renderItem={this.renderStreamItem}
            />
          </View>
        </TabsWrapper>
      );
    }
  }
  
export default StreamsComponent;
