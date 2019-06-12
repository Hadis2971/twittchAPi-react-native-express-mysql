import FavChannelsComp from './favChannelsComp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllFavChannels } from '../../state/twittch/actions';

const mapStateToProps = (state) => {
  return {
    getFavChanneslStart: state.twittch.getFavChanneslStart,
    getFavChannelsFail: state.twittch.getFavChannelsFail,
    getFavChannelsSuccess: state.twittch.getFavChannelsSuccess,
    favChanneslError: state.twittch.favChanneslError,
    channels: state.twittch.channels,
    userID: state.login.userID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getAllFavChannels
      },
      dispatch
    )
  };
};

const FavChannelsContainer = connect(mapStateToProps, mapDispatchToProps)(FavChannelsComp);
export default FavChannelsContainer;
