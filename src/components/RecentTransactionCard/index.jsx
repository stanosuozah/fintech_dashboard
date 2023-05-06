import React from "react";
import GameIcon from "../../assets/icons/GameIcon";
const date = new Date().toDateString();
const RecentTransactionCard = ({ icon, title, description, price }) => {
	return (
		<div className="flex justify-between">
			<div className="flex justify-start items-center gap-2">
				<span>{icon}</span>
				<div className="flex flex-col ">
					<h1 className="text-[#525256]  font-Inter text-xs font-bold">
						{title}
					</h1>
					<p className="text-[#666666]  font-medium text-xs font-Inter">
						{description}
					</p>
				</div>
			</div>
			<div className="flex flex-col items-end">
				<h1 className="text-[#525256] font-Inter font-bold text-xs">
					${price}
				</h1>
				<p className="text-[#666666]  font-medium text-xs font-Inter">{date}</p>
			</div>
		</div>
	);
};

export default RecentTransactionCard;
