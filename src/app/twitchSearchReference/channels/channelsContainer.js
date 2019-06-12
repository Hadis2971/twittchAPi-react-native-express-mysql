import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChannels, addChannelToFavorites } from '../../../state/twittch/actions';
import ChannelsComponent from './channelsComponent';

const mapStateToProps = (state) => {
  return {
    getChannelsStart: state.twittch.getChannelsStart,
    channelsError: state.twittch.channelsError,
    channels: state.twittch.channels,
    addChannelToFavoritesStart: state.twittch.addChannelToFavoritesStart,
    userID: state.login.userID,
    addChannelError: state.twittch.addChannelError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getChannels,
        addChannelToFavorites
      },
      dispatch
    )
  };
};

const ChannelsContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelsComponent);
export default ChannelsContainer;
