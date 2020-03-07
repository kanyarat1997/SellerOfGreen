import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import HomeComponent from './components/Home';
import DetailComponent from './components/Detail';
import histoer from './history';

class AppRoute extends React.Component {
    render() {
        return (
            <Router history={histoer}>
                <Switch>
                    <Route path="/Detail" component={DetailComponent} />
                    <Route path="/" component={HomeComponent} />
                </Switch>
            </Router>
        )
    }
}

export const RouterApp = AppRoute;