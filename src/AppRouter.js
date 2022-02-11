import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import Frame from "./app/components/frame/Frame";

export default function AppRouter() {
    return <>
        <Router>
            <Frame />
            <Switch>
                <Route path="/">
                    Komponente
                </Route>
            </Switch>
        </Router>
    </>;
}