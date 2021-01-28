import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';

const reducers = combineReducers({
  currencies: currencyReducer,
});

export default reducers;
