import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import CustomerInformation from "./app/components/customer-information/CustomerInformation";
import DepotManagement from "./app/components/DepotManagement";

export default function AppRouter() {
    //Mock data
    const [customer, setCustomer] = useState({name: "Test Name", phone: "015785708274", email: "testemail@dingens.com", address: "Beispielstraße 15", birthday: "99.12.2099", nationality: "Deutsch"});

    return <>
        <Router>
            <Switch>
                <Route path="/management">
                    <DepotManagement />
                </Route>
                <Route path="/">
                    <CustomerInformation customer={customer} />
                </Route>
            </Switch>
        </Router>
    </>;
}