import { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import CreateDepot from "./app/components/create-depot/CreateDepot";
import CustomerInformation from "./app/components/customer-information/CustomerInformation";
import DepotManagement from "./app/components/depot-management/DepotManagement";
import DepotOverview from "./app/components/depotOverview/DepotOverview";
import Frame from "./app/components/frame/Frame";
import ProtectedRoute from "./app/common/route-config/ProtectedRoute";
import Trading from "./app/components/trading/Trading";
import TransactionOverview from "./app/components/transaction-overview/TransactionOverview";
import ProtectedRouteWithDepot from "./app/common/route-config/ProtectedRouteWithDepot";

export default function AppRouter() {
	return (
		<>
			<Router>
				<Switch>
					<ProtectedRouteWithDepot path="/depot-ui/management">
						<Frame>
							<DepotManagement />
						</Frame>
					</ProtectedRouteWithDepot>
					<ProtectedRoute path="/depot-ui/data">
						<Frame>
							<CustomerInformation />
						</Frame>
					</ProtectedRoute>
					<ProtectedRouteWithDepot path="/depot-ui/overview">
						<Frame>
							<DepotOverview />
						</Frame>
					</ProtectedRouteWithDepot>
					<ProtectedRouteWithDepot path="/depot-ui/transactions">
						<Frame>
							<TransactionOverview />
						</Frame>
					</ProtectedRouteWithDepot>
					<ProtectedRouteWithDepot path="/depot-ui/trade">
						<Frame>
							<Trading />
						</Frame>
					</ProtectedRouteWithDepot>
					<ProtectedRoute path="/depot-ui/create">
						<Frame>
							<CreateDepot />
						</Frame>
					</ProtectedRoute>
					<Route path="/">
						<Redirect to="/depot-ui/overview" />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
