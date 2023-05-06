import React from "react";

const DateCard = ({ month, day }) => {
	return (
		<div className="flex flex-col bg-black/5 w-[42px] h-[62px] rounded-lg gap-2 items-center justify-center">
			<p className="text-[#878787] font-bold font-Inter text-xs">{month}</p>
			<p className="text-[#525256] font-bold font-Inter text-base">{day}</p>
		</div>
	);
};

export default DateCard;
