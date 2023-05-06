import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Balance from "./components/Layout/Balance";
import Bills from "./components/Layout/Bills";
import Transactions from "./components/Layout/Transactions";
import Expenses from "./components/Layout/Expenses";
import Goals from "./components/Layout/Goals";
import ResetPassword from "./pages/ResetPassword";
import Overview from "./components/Layout/Overview";
import AccountDetail from "./components/Layout/AccountDetail";
import Settings from "./components/Layout/Settings";

function App() {
	const Layout = () => {
		return (
			<div>
				<Dashboard />
				<Outlet />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Overview />,
				},
				{
					path: "/balance",
					element: <Balance />,
				},

				{
					path: "/bills",
					element: <Bills />,
				},
				{
					path: "/transactions",
					element: <Transactions />,
				},
				{
					path: "/balance/:accountID",
					element: <AccountDetail />,
				},
				{
					path: "/expenses",
					element: <Expenses />,
				},
				{
					path: "/goals",
					element: <Goals />,
				},
				{
					path: "/settings",
					element: <Settings />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/signup",
			element: <SignUp />,
		},
		{
			path: "/forgotpassword",
			element: <ForgotPassword />,
		},
		{
			path: "/resetpassword/:id",
			element: <ResetPassword />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
