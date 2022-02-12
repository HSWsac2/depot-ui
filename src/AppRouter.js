import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import CustomerInformation from "./app/components/customer-information/CustomerInformation";
import DepotManagement from "./app/components/DepotManagement";
import DepotOverview from "./app/components/depotOverview/DepotOverview";
import Frame from "./app/components/frame/Frame";

export default function AppRouter() {
    //Mock data
    const [customer, setCustomer] = useState({name: "Test Name", phone: "+4915785708274", email: "testemail@dingens.com", address: "Beispielstraße 15", birthday: "99.12.2099", nationality: "Deutsch"});

    return <>
        <Router>
            <Frame />
            <Switch>
                <Route path="/management">
                    <DepotManagement />
                </Route>
                <Route path="/data">
                    <CustomerInformation customer={customer} setCustomer={setCustomer}/>
                </Route>
                <Route path="/overview">
                    <DepotOverview/>
                </Route>
            </Switch>
        </Router>
    </>;
}