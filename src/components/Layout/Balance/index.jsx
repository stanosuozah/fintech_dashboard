import React, { useEffect, useState } from "react";
import axios from "axios";
import BalanceCard from "../../BalanceCard";
import MasterCardIcon from "../../../assets/icons/MasterCardIcon";
import VisaIcon from "../../../assets/icons/VisaIcon";
import EmptyBalanceCard from "../../EmptyBalanceCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../../features/accountSlice";
import Modal from "../../Common/Modal";
import Loader from "../../Loader";
import Button from "../../Buttons";
import Toast from "../../Common/Toast";

const Balance = () => {
	const { account } = useSelector((state) => state.account);
	const [loader, setLoader] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [removeId, setRemoveId] = useState("");
	const [toast, setToast] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAccountDetails = (accountID) => {
		navigate(`/balance/${accountID}`);
	};
	const token = localStorage.getItem("token");

	const handleRemove = async () => {
		try {
			setLoader(true);
			const response = await axios.delete(
				`https://finebank.onrender.com/api/v1/delete-account/${removeId}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			setLoader(false);
			setToast("Account successfully removed!");
			setTimeout(() => {
				setToast("");
			}, 3000);
		} catch (error) {
			setLoader(false);
			setToast(error.message);
			setTimeout(() => {
				setToast("");
			}, 3000);
		}
	};
	console.log(removeId);
	useEffect(() => {
		if (token) {
			(async function fetchAccounts() {
				try {
					setLoader(true);
					const response = await axios.get(
						`https://finebank.onrender.com/api/v1/accounts`,
						{ headers: { Authorization: `Bearer ${token}` } }
					);
					dispatch(setAccount(response.data));
					setLoader(false);
				} catch (error) {
					setLoader(false);
					console.log(error.message);
				}
			})();
		}
	}, [token]);
	console.log(account);
	return (
		<>
			{loader && <Loader />}
			<div className="flex">
				<div className="relative h-auto md:w-1/3 lg:w-1/5"></div>
				<div className="md:w-2/3 lg:flex-1 w-full h-full">
					{toast && <Toast message={toast} />}
					{openModal && (
						<Modal open={openModal} setOpen={setOpenModal}>
							<div className="space-y-4 flex flex-col">
								<p>Are you want to remove this account?</p>
								<div className="flex justify-between">
									<Button label="YES" type="button" onClick={handleRemove} />
									<Button
										label="NO"
										type="button"
										onClick={() => setOpenModal(false)}
									/>
								</div>
							</div>
						</Modal>
					)}
					<div className="flex flex-col gap-3 bg-[#E8E8E8] text-left px-3 py-3">
						<h1 className="text-[#878787] font-bold text-lg md:text-xl">
							Balances
						</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3">
							{account.map((account) => (
								<BalanceCard
									key={account?._id}
									accountType={account?.accountType}
									bankName={account?.bankName}
									accountNumber={
										account?.accountNumber.slice(0, -4).replace(/./g, "*") +
										account?.accountNumber.slice(-4)
									}
									totalAmount={account?.balance}
									cardImage="/images/mastercard.png"
									onClick={() => handleAccountDetails(account?._id)}
									onRemove={() => {
										setOpenModal(true);
										setRemoveId(account?._id);
									}}
								/>
							))}

							<div className="flex justify-center">
								<EmptyBalanceCard onClick={() => navigate("/balance/add")} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Balance;
