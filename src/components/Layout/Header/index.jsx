import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Notification from "../../../assets/icons/Notification";
import GreaterThan from "../../../assets/icons/GreaterThan";
import { useNavigate } from "react-router-dom";
import Button from "../../Buttons";
import Loader from "../../Loader";

const date = new Date();
const Header = ({ user }) => {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const [loader, setLoader] = useState(false);
	const navigate = useNavigate();

	const handleNav = ({ user }) => {
		setNavIsOpen(!navIsOpen);
	};
	const handleLogOut = () => {
		setLoader(true);
		setTimeout(() => {
			localStorage.removeItem("token");
			setLoader(false);
			navigate("/login");
		}, 3000);
	};

	return (
		<header className="relative flex justify-between w-full gap-2 md:gap-0 lg:gap-2 px-3 py-3 bg-[#E8E8E8] items-center ">
			{loader && <Loader />}
			<div className="z-40 md:hidden lg:hidden">
				{navIsOpen ? (
					<AiOutlineClose className="h-6 w-6" onClick={handleNav} />
				) : (
					<AiOutlineMenu className="h-6 w-6" onClick={handleNav} />
				)}
			</div>

			<div
				className={`${
					navIsOpen
						? "absolute flex flex-col gap-2 px-2 items-start z-30 left-0 top-[72px] w-full bg-[#13312f] text-white h-screen "
						: "md:flex hidden"
				}`}
			>
				<div className="flex justify-end md:justify-between  gap-2 items-center  mt-2 md:items-start md:mt-0 md:gap-0 md:flex">
					<img
						src="images/stanimage.jpg"
						width={32}
						height={32}
						className="rounded-full md:hidden"
					/>
					<p className="md:flex-1  flex md:flex md:justify-start   text-white font-Inter md:items-center items-start md:text-[#191919] md:text-base lg:text-2xl text-base font-bold">
						Hi, {user?.name?.split(" ")[0]}
						<span className="text-[#9F9F9F] text-xs md:text-sm md:ml-4 inline-flex items-center">
							<div className="hidden md:mr-2 md:inline-flex ">
								<GreaterThan />
								<GreaterThan />
							</div>
							<span className="hidden md:flex md:text-xs">
								{date.toDateString()}
							</span>
						</span>
					</p>
				</div>

				<span
					className="text-white text-base font-bold font-Inter flex self-start rounded-md cursor-pointer md:hidden"
					onClick={handleLogOut}
				>
					<Button label="Logout" />
				</span>
			</div>
			<div className="flex items-center w-full md:max-w-lg gap-3 md:gap-6 lg:gap-10 justify-end">
				<Notification />
				<div className="relative max-w-sm w-full ">
					<label for="hs-table-search" className="sr-only">
						Search
					</label>
					<input
						type="text"
						className="p-3 pl-10 block w-full bg-white border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
						placeholder="Search for items"
					/>
					<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none pl-4">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
								stroke="#525256"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M21 21L16.65 16.65"
								stroke="#525256"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
