import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./app/common/route-config/ProtectedRoute";
import ProtectedRouteWithDepot from "./app/common/route-config/ProtectedRouteWithDepot";
import CreateDepot from "./app/components/create-depot/CreateDepot";
import CustomerInformation from "./app/components/customer-information/CustomerInformation";
import DepotManagement from "./app/components/depot-management/DepotManagement";
import DepotOverview from "./app/components/depotOverview/DepotOverview";
import Frame from "./app/components/frame/Frame";
import Trading from "./app/components/trading/Trading";
import TransactionOverview from "./app/components/transaction-overview/TransactionOverview";
import Login from './app/common/login/Login'
export default function AppRouter() {
	return (
		<BrowserRouter basename="/depot-ui">
			<Switch>
				<ProtectedRouteWithDepot path="/management">
					<Frame>
						<DepotManagement />
					</Frame>
				</ProtectedRouteWithDepot>
				<ProtectedRoute path="/data">
					<Frame>
						<CustomerInformation />
					</Frame>
				</ProtectedRoute>
				<ProtectedRouteWithDepot path="/overview">
					<Frame>
						<DepotOverview />
					</Frame>
				</ProtectedRouteWithDepot>
				<ProtectedRouteWithDepot path="/transactions">
					<Frame>
						<TransactionOverview />
					</Frame>
				</ProtectedRouteWithDepot>
				<ProtectedRouteWithDepot path="/trade">
					<Frame>
						<Trading />
					</Frame>
				</ProtectedRouteWithDepot>
				<ProtectedRoute path="/create">
					<Frame>
						<CreateDepot />
					</Frame>
				</ProtectedRoute>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<Redirect to="/overview" />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
