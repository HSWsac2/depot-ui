import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";

export default function AppRouter() {
    return <>
        <Router>
            <Switch>
                <Route path="/">
                    Komponente
                </Route>
            </Switch>
        </Router>
    </>;
}