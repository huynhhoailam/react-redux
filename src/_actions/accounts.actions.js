import * as Types from '../_constants/accounts.constants';
import APICaller from '../_services/services';

export const actFetchAccounts = (accounts) => {
    return {
        type: Types.FETCH_ACCOUNTS,
        accounts
    }
}

export const actFetchAccountsRequest = () => {
    return dispatch => {
        return APICaller('accounts', 'GET', null).then(res => {
            dispatch(actFetchAccounts(res.data));
        });
    };
}