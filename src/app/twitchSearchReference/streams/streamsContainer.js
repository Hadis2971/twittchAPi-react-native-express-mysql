import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreams } from '../../../state/twittch/actions';
import StreamsComponent from './streamsComponent';

const mapStateToProps = (state) => {
  return {
    getStreamsStart: state.twittch.getStreamsStart,
    streams: state.twittch.streams,
    streamsErrors: state.twittch.streamsErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getStreams
      },
      dispatch
    )
  };
};

const StreamsContainer = connect(mapStateToProps, mapDispatchToProps)(StreamsComponent);
export default StreamsContainer;
