import React from "react";
import BalanceCard from "../../BalanceCard";
import MasterCardIcon from "../../../assets/icons/MasterCardIcon";
import VisaIcon from "../../../assets/icons/VisaIcon";
import EmptyBalanceCard from "../../EmptyBalanceCard";
import { useNavigate, useParams } from "react-router-dom";

const Balance = () => {
	const navigate = useNavigate();
	const { accountID } = useParams();
	const handleAccountDetails = () => {
		navigate(`/balance/${accountID}`);
	};

	return (
		<div className="flex">
			<div className="relative h-auto w-1/5"></div>
			<div className="flex-1 h-full">
				<div className="flex flex-col gap-3 bg-[#E8E8E8] text-left px-3 py-3">
					<h1 className="text-[#878787] font-bold text-xl">Balances</h1>
					<div className="grid grid-cols-3 gap-4">
						<BalanceCard
							balanceName="Credit Card"
							bankName="Master Card"
							accountNumber={
								`747474757585759`.slice(0, -4).replace(/./g, "*") +
								`747474757585759`.slice(-4)
							}
							totalAmount="25000"
							cardImage="/images/mastercard.png"
							onClick={handleAccountDetails}
						/>
						<BalanceCard
							balanceName="Checking"
							bankName="All Bank Ltd"
							accountNumber={
								`747474757585759`.slice(0, -4).replace(/./g, "*") +
								`747474757585759`.slice(-4)
							}
							totalAmount="5000"
							cardImage="/images/visa-credit-card.png"
							onClick={handleAccountDetails}
						/>
						<BalanceCard
							balanceName="Loan"
							bankName="All Bank Ltd"
							accountNumber={
								`747474757585759`.slice(0, -4).replace(/./g, "*") +
								`747474757585759`.slice(-4)
							}
							totalAmount="5000"
							onClick={handleAccountDetails}
						/>
						<BalanceCard
							balanceName="Credit Card"
							bankName="Master Card"
							accountNumber={
								`747474757585759`.slice(0, -4).replace(/./g, "*") +
								`747474757585759`.slice(-4)
							}
							totalAmount="25000"
							cardImage="/images/mastercard.png"
							onClick={handleAccountDetails}
						/>
						<BalanceCard
							balanceName="Checking"
							bankName="All Bank Ltd"
							accountNumber={
								`747474757585759`.slice(0, -4).replace(/./g, "*") +
								`747474757585759`.slice(-4)
							}
							totalAmount="5000"
							cardImage="/images/visa-credit-card.png"
							onClick={handleAccountDetails}
						/>
						<EmptyBalanceCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Balance;
