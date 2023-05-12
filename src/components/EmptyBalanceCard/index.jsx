import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons";

const EmptyBalanceCard = ({ onClick }) => {
	return (
		<div className="flex flex-col text-center gap-1 px-12 py-8 w-full justify-center md:max-w-xs max-h-72 bg-white rounded-lg shadow-xl">
			<div className="">
				<Button label="Add Accounts" onClick={onClick} />
			</div>
			<p className="text-[#9F9F9F] font-Inter font-bold">Edit Accounts</p>
		</div>
	);
};

export default EmptyBalanceCard;
