import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChannels } from '../../../state/twittch/actions';
import ChannelsComponent from './channelsComponent';

const mapStateToProps = (state) => {
  return {
    getChannelsStart: state.twittch.getChannelsStart,
    channelsError: state.twittch.channelsError,
    channels: state.twittch.channels
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getChannels
      },
      dispatch
    )
  };
};

const ChannelsContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelsComponent);
export default ChannelsContainer;
