import React, { useState } from "react";
import LogoWhite from "../../../assets/icons/LogoWhite";
import OverviewIcon from "../../../assets/icons/OverviewIcon";
import BalanceIcon from "../../../assets/icons/BalanceIcon";
import TransactionIcon from "../../../assets/icons/TransactionIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import GoalsIcon from "../../../assets/icons/GoalsIcon";
import ExpensesIcon from "../../../assets/icons/ExpensesIcon";
import BillsIcon from "../../../assets/icons/BillsIcon";
import { NavLink, useNavigate } from "react-router-dom";
import LogOutIcon from "../../../assets/icons/LogOutIcon";
import DotIcon from "../../../assets/icons/DotIcon";
import Loader from "../../Loader";

const menus = [
	{ name: "Overview", icon: <OverviewIcon />, link: "/" },
	{ name: "Balances", icon: <BalanceIcon />, link: "/balance" },
	{ name: "Transactions", icon: <TransactionIcon />, link: "/transactions" },
	{ name: "Bills", icon: <BillsIcon />, link: "/bills" },
	{ name: "Expenses", icon: <ExpensesIcon />, link: "/expenses" },
	{ name: "Goals", icon: <GoalsIcon />, link: "/goals" },
	{ name: "Settings", icon: <SettingsIcon />, link: "/settings" },
];

const SideBar = ({ user }) => {
	const [loader, setLoader] = useState(false);
	const navigate = useNavigate();
	const handleLogOut = () => {
		setLoader(true);
		setTimeout(() => {
			localStorage.removeItem("token");
			setLoader(false);
			navigate("/login");
		}, 4000);
	};
	return (
		<div className="py-3 bg-[#191919] flex justify-between md:block  md:fixed md:w-1/3 lg:w-1/5 md:h-screen z-10 inset-y-0 md:pt-10 md:px-6">
			{loader && <Loader />}
			<div className="hidden  md:flex md:items-center md:justify-center">
				<LogoWhite />
			</div>

			<ul className=" justify-between overflow-x-auto md:mt-10 flex md:flex-col gap-2 md:px-4">
				{menus.map((menu, index) => (
					<li>
						<NavLink
							to={menu.link}
							className={
								({ isActive }) =>
									[
										"inline-flex  gap-3 justify-right w-full p-2",
										isActive ? "bg-[#299D91]" : "",
									]
										.filter(Boolean)
										.join(" ") //add the isActive to the array, separates with a space " "
							}
						>
							{menu.icon}

							<p className="text-white text-sm font-Inter ">{menu.name}</p>
						</NavLink>
					</li>
				))}
			</ul>
			<div
				onClick={handleLogOut}
				className="hidden md:inline-flex gap-3 justify-right w-full  mt-6 mb-6 bg-black/75 px-4 py-3 cursor-pointer"
			>
				<LogOutIcon />
				<p className="text-white text-sm font-Inter  rounded-md ">Logout</p>
			</div>
			<div className="hidden md:flex justify-start gap-6 items-center">
				<img
					src="images/stanimage.jpg"
					width={32}
					height={32}
					className=" rounded-full"
				/>
				<div className="flex justify-between gap-3">
					<div className="flex flex-col gap-0 items-start">
						<h1 className=" font-Inter text-white text-xs">{user.name}</h1>
						<NavLink className="text-xs  font-Inter  text-white/70">
							View profile
						</NavLink>
					</div>
				</div>
				<DotIcon />
			</div>
		</div>
	);
};

export default SideBar;
