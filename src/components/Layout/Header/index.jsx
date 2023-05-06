import React from "react";
import Notification from "../../../assets/icons/Notification";
import GreaterThan from "../../../assets/icons/GreaterThan";

const Header = ({ user }) => {
	const date = new Date();
	return (
		<header className="flex justify-between gap-2 px-3 py-3 bg-[#E8E8E8] items-center ">
			<p className="flex-1 flex justify-start font-Inter items-center text-[#191919] text-2xl font-bold">
				Hello, {user?.name?.split(" ")[0]}
				<span className="text-[#9F9F9F] text-sm ml-4 inline-flex items-center">
					<div className="mr-2 inline-flex">
						<GreaterThan />
						<GreaterThan />
					</div>
					{date.toDateString()}
				</span>
			</p>
			<div className="flex items-center w-full max-w-lg gap-10 justify-end">
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
