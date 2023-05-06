import React from "react";
import HousingIcon from "../../assets/icons/HousingIcon";
import UpChartIcon from "../../assets/icons/UpChartIcon";
import FoodIcon from "../../assets/icons/FoodIcon";
import TransportationIcon from "../../assets/icons/TransportationIcon";
import EntertainmentIcon from "../../assets/icons/EntertainmentIcon";
import ShoppingIcon from "../../assets/icons/ShoppingIcon";
import OthersIcon from "../../assets/icons/OthersIcon";

const ExpenseCard = ({
	expenseCategory,
	percent,
	expenseTotal,
	expenseItem,
	expenseItemPrice,
	expenseItemDate,
	chartIcon,
}) => {
	return (
		<div className="shadow-lg rounded-md flex flex-col gap-1 ">
			<div className="bg-[#E8E8E8] w-full flex justify-between rounded-md p-2 items-center ">
				<div className="flex justify-between gap-1 items-center">
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
						<h2 className="text-sm font-bold text-[#666666]">
							${expenseTotal}
						</h2>
					</div>
				</div>
				<div className="flex flex-col gap-0 items-right">
					<div className="flex justify-end gap-1 items-center">
						<p className="text-xs font-bold text-[#666666] font-Inter">
							{percent}%
						</p>
						<span>{chartIcon}</span>
					</div>
					<p className="text-[10px] text-[#666666]  font-Inter">
						Compare to last month
					</p>
				</div>
			</div>
			<div className="flex flex-col bg-white px-2 gap-2 pb-3">
				<div className="flex justify-between gap-1">
					<p className="font-Intertext-sm text-[#525256] font-bold">
						{expenseItem}
					</p>
					<div>
						<h3 className="text-sm text-[#525256] font-bold">
							${expenseItemPrice}
						</h3>
						<p className="text-[10px] text-[#666666]  font-Inter">
							{expenseItemDate}
						</p>
					</div>
				</div>
				<div className="flex justify-between gap-1">
					<p className="font-Intertext-sm text-[#525256] font-bold">
						{expenseItem}
					</p>
					<div>
						<h3 className="text-sm text-[#525256] font-bold">
							${expenseItemPrice}
						</h3>
						<p className="text-[10px] text-[#666666]  font-Inter">
							{expenseItemDate}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExpenseCard;
