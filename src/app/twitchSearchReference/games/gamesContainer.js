import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGames } from '../../../state/twittch/actions';
import GamesComponent from './gamesComponent';

const mapStateToProps = (state) => {
  return {
    getGamesStart: state.twittch.getGamesStart,
    streams: state.twittch.streams,
    gamesError: state.twittch.gamesError,
    games: state.twittch.games
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getGames
      },
      dispatch
    )
  };
};

const GamesContainer = connect(mapStateToProps, mapDispatchToProps)(GamesComponent);
export default GamesContainer;
