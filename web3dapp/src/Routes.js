import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "./App";
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route component={App} />
                </Switch>
            </Router>
        );
    }
}
