import React, { Component } from 'react';

class AccountsListItemPage extends Component {

    render() {
        var { account, index } = this.props;
        var statusName = account.status ? 'Active' : 'InActive';
        var statusClass = account.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{account.username}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning mr-10">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default AccountsListItemPage;