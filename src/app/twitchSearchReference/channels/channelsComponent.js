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

  renderChannel = ({ item }) => {
    const { userID } = this.props;
    return <Channel 
    item={item} 
    userID={userID} 
    addNewChannelToFavorites={this.addNewChannelToFavorites}/>
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.channelsError) {
      this.setState({
        errors: true
      });
      return;
    }
    
    this.setState({
      channels: [...nextProps.channels]
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

  render () {
    const { channels, errors, showMyAlert } = this.state;
    const { getChannelsStart, channelsError, addChannelToFavoritesStart, addChannelError } = this.props;
    
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
            keyExtractor={(item) => (item._id + '')}
            renderItem={this.renderChannel}
          />
        </View>
      </TabsWrapper>
    );
  }
}
  
export default ChannelsComponent;
