import { combineReducers } from 'redux';
import ReducerSearch from './reducer_search';

const rootReduer = combineReducers({
  result: ReducerSearch
});

export default rootReduer;
