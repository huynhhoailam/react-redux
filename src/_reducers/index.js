import { combineReducers } from 'redux';
import accounts from './accounts.reducers';

const appReducers = combineReducers({
    accounts
});

export default appReducers;