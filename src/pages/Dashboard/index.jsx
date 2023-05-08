import React, { useState, useEffect } from "react";
import Header from "../../components/Layout/Header";
import SideBar from "../../components/Layout/Sidebar";
import Balance from "../../components/Layout/Balance";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthLoader from "../../components/Loader/AuthLoader";
import { setUser } from "../../features/userSlice";

const Dashboard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loader, setLoader] = useState(false);
	const { user } = useSelector((state) => state.user);
	console.log(user);

	const token = localStorage.getItem("token");
	useEffect(() => {
		if (token) {
			(async function fetchUser() {
				try {
					// const decodeToken = jwt.verify(token, "chatappbysamuel280692");
					// const { id } = decodeToken;
					// const id = "11";
					setLoader(true);
					const response = await axios.get(
						`https://finebank.onrender.com/api/v1/auth/`,
						{ headers: { Authorization: `Bearer ${token}` } }
					);
					// localStorage.setItem("token", response.data.token);
					if (response.data) {
						dispatch(setUser(response.data));
						setLoader(false);
						// navigate("/");
					}

					// console.log(response);
				} catch (error) {
					setLoader(false);
					console.log(error.message);
				}
			})();
		} else {
			navigate("/login");
		}
	}, [token]);

	return (
		<div className="flex flex-col md:flex-row gap-0.5 md:gap-0">
			{loader && <AuthLoader />}
			<div className="relative h-auto md:w-1/3 lg:w-1/5" />
			<div className="md:flex-1 md:h-full border-b-slate-50 border-b-2 ">
				<Header user={user} />
			</div>
			{/* Side bar is fixed, so out of box model */}
			<SideBar user={user} />
		</div>
	);
};

export default Dashboard;
