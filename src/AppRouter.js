import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./app/common/route-config/ProtectedRoute";
import ProtectedRouteWithDepot from "./app/common/route-config/ProtectedRouteWithDepot";
import CreateDepot from "./app/components/create-depot/CreateDepot";
import CustomerInformation from "./app/components/customer-information/CustomerInformation";
import DepotManagement from "./app/components/depot-management/DepotManagement";
import DepotOverview from "./app/components/depot-overview/DepotOverview";
import Frame from "./app/components/frame/Frame";
import Trading from "./app/components/trading/Trading";
import TransactionOverview from "./app/components/transaction-overview/TransactionOverview";
import Login from './app/common/login/Login'
import Impressum from "./app/components/legal/Impressum";
import DSGVO from "./app/components/legal/DSGVO";
export default function AppRouter() {
	return (
		<BrowserRouter basename="/depot">
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
				<Route path="/impressum">
					<Impressum />
				</Route>
				<Route path="/dsgvo">
					<DSGVO />
				</Route>
				<ProtectedRouteWithDepot path="/">
					<Redirect to="/overview" />
				</ProtectedRouteWithDepot>
			</Switch>
		</BrowserRouter>
	);
}
