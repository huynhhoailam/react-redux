import React, { Component } from 'react';

class DashboardPage extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Total Categories</th>
                        <th>Total Products</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default DashboardPage;