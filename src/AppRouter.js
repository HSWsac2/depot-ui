import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import CustomerInformation from "./app/components/customer-information/CustomerInformation";
import DepotManagement from "./app/components/depot-management/DepotManagement";
import DepotOverview from "./app/components/depotOverview/DepotOverview";
import Frame from "./app/components/frame/Frame";
import Trading from "./app/components/trading/Trading";
import ProtectedRoute from "./app/components/frame/ProtectedRoute";
import TransactionOverview from "./app/components/transaction-overview/TransactionOverview";
import Footer from './app/components/frame/Footer';

export default function AppRouter() {
    //Mock data
    const [customer, setCustomer] = useState({ name: "Test Name", phone: "+4915785708274", email: "testemail@dingens.com", address: "Beispielstraße 15", birthday: "99.12.2099", nationality: "Deutsch", buyingpower: "12 Mille", account: "DE32DINGSBUMSIBAN" });

    return <>
        <Router>
            <Switch>
                <ProtectedRoute path="/management">
                    <Frame >
                        <DepotManagement />
                    </Frame>
                </ProtectedRoute>
                <ProtectedRoute path="/data">
                    <Frame >
                        <CustomerInformation customer={customer} setCustomer={setCustomer} />
                    </Frame>
                </ProtectedRoute>
                <ProtectedRoute path="/overview">
                    <Frame >
                        <DepotOverview />
                    </Frame>
                </ProtectedRoute>
                <ProtectedRoute path="/transactions">
                    <Frame >
                        <TransactionOverview />
                    </Frame>
                </ProtectedRoute>
                <ProtectedRoute path="/trade">
                    <Frame >
                        <Trading />
                    </Frame>
                </ProtectedRoute>
                <Route path="/">
                    <Redirect to="/overview" />
                </Route>
            </Switch>
        </Router>
    </>;
}