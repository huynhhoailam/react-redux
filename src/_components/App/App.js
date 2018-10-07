import React, { Component } from 'react';
import './App.css';
import NavMenu from '../NavMenu/NavMenu';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <div>
                        <NavMenu />
                        <div className="container">
                            <div>
                                {this.showContentMenus(routes)}
                            </div>
                        </div>
                    </div>
                </HashRouter>

            </div>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main} />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
