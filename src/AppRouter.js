import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import CreateDepot from "./app/components/create-depot/CreateDepot";
import CustomerInformation from "./app/components/customer-information/CustomerInformation";
import DepotManagement from "./app/components/depot-management/DepotManagement";
import DepotOverview from "./app/components/depotOverview/DepotOverview";
import Frame from "./app/components/frame/Frame";
import ProtectedRoute from "./app/components/frame/ProtectedRoute";
import Trading from "./app/components/trading/Trading";
import TransactionOverview from "./app/components/transaction-overview/TransactionOverview";

export default function AppRouter() {
	return (
		<>
			<Router>
				<Switch>
					<ProtectedRoute path="/management">
						<Frame>
							<DepotManagement />
						</Frame>
					</ProtectedRoute>
					<ProtectedRoute path="/data">
						<Frame>
							<CustomerInformation />
						</Frame>
					</ProtectedRoute>
					<ProtectedRoute path="/overview">
						<Frame>
							<DepotOverview />
						</Frame>
					</ProtectedRoute>
					<ProtectedRoute path="/transactions">
						<Frame>
							<TransactionOverview />
						</Frame>
					</ProtectedRoute>
					<ProtectedRoute path="/trade">
						<Frame>
							<Trading />
						</Frame>
					</ProtectedRoute>
					<ProtectedRoute path="/create">
						<Frame>
							<CreateDepot />
						</Frame>
					</ProtectedRoute>
					<Route path="/">
						<Redirect to="/overview" />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
