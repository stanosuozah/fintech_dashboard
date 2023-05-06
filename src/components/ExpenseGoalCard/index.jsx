import React from "react";
import EditIcon from "../../assets/icons/EditIcon";
import HousingIcon from "../../assets/icons/HousingIcon";
import FoodIcon from "../../assets/icons/FoodIcon";
import TransportationIcon from "../../assets/icons/TransportationIcon";
import EntertainmentIcon from "../../assets/icons/EntertainmentIcon";
import ShoppingIcon from "../../assets/icons/ShoppingIcon";
import OthersIcon from "../../assets/icons/OthersIcon";
import AdjustButton from "../AdjustButton";

const ExpenseGoalCard = ({ expenseCategory, expenseTotal }) => {
	return (
		<div className="flex justify-between items-center bg-white  px-4 py-6 rounded-md">
			<div className="flex justify-between gap-2 p-0">
				<div className="px-2 py-5 bg-[#D1D1D1] items-center flex h-2 w-8 rounded-md">
					{expenseCategory == "Housing" ? (
						<HousingIcon />
					) : expenseCategory == "Food" ? (
						<FoodIcon />
					) : expenseCategory == "Transportation" ? (
						<TransportationIcon />
					) : expenseCategory === "Entertainment" ? (
						<EntertainmentIcon />
					) : expenseCategory === "Shopping" ? (
						<ShoppingIcon />
					) : (
						<OthersIcon />
					)}
				</div>
				<div className="flex flex-col gap-0">
					<p className="text-xs font-Inter">{expenseCategory}</p>{" "}
					<h2 className="text-sm font-bold text-black">${expenseTotal}</h2>
				</div>
			</div>
			<div className="">
				<AdjustButton label="Adjust" />
			</div>
		</div>
	);
};

export default ExpenseGoalCard;
