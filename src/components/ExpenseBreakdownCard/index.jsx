import React from "react";
import HousingIcon from "../../assets/icons/HousingIcon";
import TransportationIcon from "../../assets/icons/TransportationIcon";
import EntertainmentIcon from "../../assets/icons/EntertainmentIcon";
import ShoppingIcon from "../../assets/icons/ShoppingIcon";
import OthersIcon from "../../assets/icons/OthersIcon";
import FoodIcon from "../../assets/icons/FoodIcon";

const ExpenseBreakdownCard = ({
	expenseAmount,
	expenseCategory,
	percent,
	percentIcon,
}) => {
	return (
		<div className="flex justify-between gap-2 items-center">
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
			<div className="flex flex-col">
				<p className="font-Inter text-xs font-bold text-[#878787]">
					{expenseCategory}
				</p>
				<h1 className="font-Inter text-[#191919] font-bold text-base">
					${expenseAmount}
				</h1>
				<div className="flex justify-start items-center gap-2">
					<p className="text-[#9F9F9F] font-Inter font-medium text-xs">
						{percent}%
					</p>
					<span>{percentIcon}</span>
				</div>
			</div>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.5">
					<path
						d="M3 12L22 12"
						stroke="#9F9F9F"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M15 5L22 12L15 19"
						stroke="#9F9F9F"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		</div>
	);
};

export default ExpenseBreakdownCard;
