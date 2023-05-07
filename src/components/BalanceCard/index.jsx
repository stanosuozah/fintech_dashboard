import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons";

const BalanceCard = ({
	onClick,
	balanceName,
	bankName,
	cardImage,
	accountNumber,
	totalAmount,
}) => {
	return (
		<div className="flex flex-col gap-0.5 md:gap-1 px-3 py-2 w-full md:max-w-xs max-h-52 bg-white rounded-lg shadow-xl">
			<div className="flex justify-between items-center">
				<h1 className="text-xs md:text-base text-[#878787] font-bold">
					{balanceName}
				</h1>
				<div className="flex justify-between gap-1 items-center">
					<p className="text-xs font-bold text-[#666666]">{bankName}</p>
					{cardImage && <img className="w-12 h-8" src={cardImage} />}
				</div>
			</div>
			<div className="flex flex-col items-start gap-1 md:gap-2 ">
				<div className="flex flex-col items-start">
					<h1 className="text-[#191919] md:text-xl text-lg font-bold">
						{accountNumber}
					</h1>
					<p className="font-Inter text-sm text-[#9F9F9F]">Account Number</p>
				</div>
				<div className="flex flex-col items-start">
					<h1 className="text-[#191919] md:text-xl text-lg font-bold">
						${totalAmount}
					</h1>
					<p className="font-Inter text-sm text-[#9F9F9F]">Total amount</p>
				</div>
			</div>
			<div className="flex justify-between items-center ">
				<Link className="text-[#299D91] font-Inter">Remove</Link>
				<div className="">
					<Button label="Details" icon=">" onClick={onClick} />
				</div>
			</div>
		</div>
	);
};

export default BalanceCard;
