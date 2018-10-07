import React, { Component } from 'react';
import AccountsListPage from './AccountsListPage';
import { connect } from 'react-redux';
import { actFetchAccountsRequest } from '../../_actions/accounts.actions';
import AccountsListItemPage from './AccountsListItemPage';

class AccountsPage extends Component {

    componentDidMount() {
        this.props.fetchAllAccounts();
    }

    render() {
        var { accounts } = this.props;
        return (
            <div className="content">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">List of Acounts</h3>
                    </div>
                    <button type="button" name="btnAdd" className="btn btn-primary ml">Add</button>
                    <AccountsListPage>
                        {this.showList(accounts)}
                    </AccountsListPage>
                </div></div>

        );
    }

    showList = (accounts) => {
        var result = null;
        if (accounts.length > 0) {
            result = accounts.map((account, index) => {
                return (
                    <AccountsListItemPage
                        key={index}
                        index={index}
                        account={account} />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllAccounts: () => {
            dispatch(actFetchAccountsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);