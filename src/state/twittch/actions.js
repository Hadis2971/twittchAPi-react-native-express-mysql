import * as types from './actionTypes';
import twittchApis from '../../api/twittch/twittchApis';

export const getStreams = (path) => async (dispatch) => {
  dispatch({ type: types.GET_STREAMS_START });
  const searchStremasResult = await twittchApis.get(path);
  console.log(searchStremasResult);
  if ((!searchStremasResult)) {
    dispatch({
      type: types.GET_STREAMS_FAIL,
      errors: 'No Streams Found'
    });
  } else {
    dispatch({
      type: types.GET_STREAMS_SUCCESS,
      streams: searchStremasResult.data.streams
    });
  }
};
