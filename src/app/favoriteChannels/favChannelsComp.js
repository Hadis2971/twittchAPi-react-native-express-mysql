import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import ItemChannel from '../common/itemChannel';
import Alert from '../common/alert';
import favChannelStyles from '../../styles/favChannel';
class FavChannelsComp extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      listOfChannels: [],
      offsetForLoadingFavChannels: 0,
      showAlert: false
    };
    this.onEndReachedCalledDuringMomentum = true;
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

  componentWillReceiveProps (nextProps) {
    if (nextProps.favChanneslError) {
      this.setState({
        showAlert: true
      });
    }
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

  renderListItem = ({ item }) => {
    return (
     <ItemChannel item={item}/>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginBottom: '3%'
        }}
      />
    );
  };

  hideMyAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render () {
    const { listOfChannels, showAlert } = this.state;
    const { favChanneslError } = this.props;
    
    return (
      <View style={favChannelStyles.container}>
        <Alert 
          showMyAlert={showAlert}
          title='Error'
          message={favChanneslError || 'Something Went Wrong Please Try Again'}
          hideMyAlert={this.hideMyAlert}
          confirmText='OK'
          buttonColor='#DD6B55'
        />
        <FlatList 
          data={listOfChannels}
          renderItem={this.renderListItem}
          keyExtractor={(item) => (item.id + '')}
          ItemSeparatorComponent={this.renderSeparator}
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          onEndReachedThreshold={0.5}
          onEndReached={async () => {
            if (!this.onEndReachedCalledDuringMomentum) {
              await this.handleInfiniteScroll();
              this.onEndReachedCalledDuringMomentum = true;
            }
          }}
        />
      </View>
    );
  }
}

export default FavChannelsComp;
