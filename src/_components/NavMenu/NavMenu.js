import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Dashboard',
        to: '/',
        exact: true
    },
    {
        name: 'Accounts',
        to: '/accounts',
        exact: false
    },
    {
        name: 'Categories',
        to: '/categories',
        exact: false
    },
    {
        name: 'Products',
        to: '/products',
        exact: false
    }
];

const MenuLink = ({ name, to, exact }) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active} `}>
                        <Link to={to} className="nav-link">{name}</Link>
                    </li>
                );
            }}
        />
    );
};

class NavMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link to={"/"} replace={true} className="navbar-brand">UNKNOWN</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showMenus(menus)}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        name={menu.name}
                        to={menu.to}
                        exact={menu.exact} />
                );
            });
        }
        return result;
    }
}

export default NavMenu;