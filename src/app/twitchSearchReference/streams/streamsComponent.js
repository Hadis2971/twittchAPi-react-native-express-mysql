import React, { PureComponent } from 'react';
import TabsWrapper from '../wrapper';
import HOC from '../HOC';
import { View, Text, FlatList, Image, Linking, Button } from 'react-native';
import Stream from './stream';
import homeStyles from '../../../styles/home';

class StreamsComponent extends PureComponent {

    constructor (props) {
      super(props);
      this.state = {
        streams: []
      }
    }
  
    renderStreamItem = ({ item }) => {
      return <Stream item={item}/>
    };
    
    componentWillReceiveProps(nextProps) {
      this.setState({
        streams: [...nextProps.streams]
      });
    }

    render () {
      const { streams } = this.state;
      const { getStreamsStart, streamsErrors, errors, hideAlert, submitSearchHandler } = this.props;
      
      return (
        <TabsWrapper
          errors={errors} 
          isVisible={getStreamsStart} 
          alertTitle='Search For Streams Error'
          errorMsg={streamsErrors}
          searchTitle='Search For Streams'
          submitSearchHandler={submitSearchHandler}
          hideAlert={hideAlert}
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

export default HOC(StreamsComponent, { type: 'streams' });
