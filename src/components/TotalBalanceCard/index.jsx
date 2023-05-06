import React from "react";
import { Link } from "react-router-dom";
import BalanceDetailIcon from "../../assets/icons/BalanceDetailIcon";

const TotalBalanceCard = ({
	balance,
	accountType,
	accountNumber,
	cardImage,
}) => {
	const updatedAccountNumber = accountNumber.toString;
	return (
		<div className="flex flex-col gap-5 px-2 py-3">
			<div className="flex justify-between">
				<h1 className="text-[#191919] font-bold text-xl font-inter">
					${balance}
				</h1>
				<Link className="font-Inter text-[14px] font-medium text-[#525256]">
					All Accounts
				</Link>
			</div>
			<div className="flex flex-col gap-1 bg-[#299D91] p-3 rounded-lg">
				<div className="flex justify-between items-center">
					<p className="text-white text-[14px] opacity-70 font-medium font-Inter">
						Account Type
					</p>
					<img src={cardImage} alt={accountType} width={40} height={40} />
				</div>
				<h3 className="font-Inter font-bold text-base text-white">
					{accountType}
				</h3>
				<div className="flex justify-between ">
					<p className="font-Inter font-medium text-[14px] text-white opacity-70">
						{accountNumber}
					</p>
					<div className="flex justify-between items-center gap-2">
						<h4 className="text-base font-bold font-Inter text-white">
							${balance}
						</h4>
						<BalanceDetailIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalBalanceCard;
