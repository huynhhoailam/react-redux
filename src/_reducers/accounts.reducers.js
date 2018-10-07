import * as Types from '../_constants/accounts.constants';

var initialState = [];

const accounts = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ACCOUNTS:
            state = action.accounts;
            return [...state];
        default:
            return [...state];
    }
}

export default accounts;