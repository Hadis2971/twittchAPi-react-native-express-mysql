import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStreams } from '../../state/twittch/actions';
import HomeComponent from './homeComponent';

const mapStateToProps = (state) => {
  return {
    getStreamsStart: state.twittch.getStreamsStart,
    streams: state.twittch.streams,
    errors: state.twittch.errors
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

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;
