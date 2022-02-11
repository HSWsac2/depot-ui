import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import Frame from "./app/components/frame/Frame";

export default function AppRouter() {
    //Mock data
    const [customer, setCustomer] = useState({name: "Test Name", phone: "015785708274", email: "testemail@dingens.com", address: "Beispielstraße 15", birthday: "99.12.2099", nationality: "Deutsch"});

    return <>
        <Router>
            <Frame />
            <Switch>
                <Route path="/">
                    <CustomerInformation customer={customer} />
                </Route>
            </Switch>
        </Router>
    </>;
}