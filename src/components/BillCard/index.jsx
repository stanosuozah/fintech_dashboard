import React from "react";
import DateCard from "../Common/DateCard";

const BillsCard = ({ billTitle, date, price, day, month, logo }) => {
	return (
		<div className="flex justify-between gap-2 items-center">
			<div className="flex justify-start gap-2 items-center">
				<DateCard day={day} month={month} />
				<div className="flex flex-col p-0">
					<img src={logo} height={14} width={30} />
					<h2 className="font-Inter text-xs font-bold text-[#525256]">
						{billTitle}
					</h2>
					<p className="font-Inter text-xs text-[#9F9F9F]">
						Last Charge - <span>{date}</span>
					</p>
				</div>
			</div>

			<span className="rounded-[8px] px-3 py-2 border-gray-400 border font-bold font-Inter text-[#191919] text-sm">
				${price}
			</span>
		</div>
	);
};

export default BillsCard;
