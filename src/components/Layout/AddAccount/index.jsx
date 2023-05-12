import React, { useRef, useState } from "react";
import GameIcon from "../../../assets/icons/GameIcon";
import Button from "../../Buttons";
import InputBox from "../../InputBox";
import useForm from "../../../hooks/useForm";
import axios from "axios";
import Loader from "../../Loader";
import Toast from "../../Common/Toast";
import { useNavigate } from "react-router-dom";

const AddAccount = () => {
	const navigate = useNavigate();
	const [toast, setToast] = useState("");
	const [loader, setLoader] = useState(false);
	const [value, setValue] = useForm({ accountType: "savings" });
	const formRef = useRef();
	const token = localStorage.getItem("token");
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoader(true);
			const response = await axios.post(
				`https://finebank.onrender.com/api/v1/create-account`,
				value,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			setLoader(false);
			formRef.current.reset();
			setToast("Account created successfully!");
			setTimeout(() => {
				setToast("");
				navigate("/balance");
			}, 3000);
		} catch (error) {
			setLoader(false);
			console.log(error);
			setToast(error.message);
			setTimeout(() => {
				setToast("");
			}, 3000);
		}
	};

	return (
		<>
			{loader && <Loader />}
			<div className="flex">
				<div className="relative h-auto md:w-1/3 lg:w-1/5"></div>
				<div className="md:w-2/3 lg:flex-1 w-full h-full">
					{toast && <Toast message={toast} />}
					<div className="flex flex-col gap-3">
						<div className=" flex flex-col gap-3 bg-[#E8E8E8] text-left px-3 py-3">
							<h1 className="text-[#878787] font-bold text-lg">
								Account Details
							</h1>
							<form
								ref={formRef}
								onSubmit={handleSubmit}
								className="flex bg-white rounded-lg flex-col gap-6 px-6 py-6"
							>
								<div className="flex flex-col md:flex-row md:justify-start gap:3 md:gap-32">
									<div className="flex flex-col">
										<InputBox
											label="Bank Name"
											name="bankName"
											onChange={setValue}
										/>
									</div>

									<div className="flex flex-col gap-0.5 w-full max-w-sm ">
										<label
											htmlFor={name}
											className="block text-sm mb-2 font-Inter text-[#191D23] font-medium"
										>
											Account Type
										</label>
										<select
											name="accountType"
											onChange={setValue}
											className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm  border"
										>
											<option value="savings">Savings</option>
											<option value="checking">Checking</option>
											<option value="credit card">Credit Card</option>
											<option value="debit card">Debit Card</option>
											<option value="investment">Investment</option>
											<option value="loan">Loan</option>
											<option value="others">Others</option>
										</select>
									</div>

									<div className="flex flex-col gap-0.5">
										<InputBox
											label="Balance"
											type="number"
											name="balance"
											onChange={setValue}
										/>
									</div>
								</div>
								<div className="flex flex-col md:flex-row gap-3 md:justify-start md:gap-20">
									<div className="flex flex-col gap-0.5">
										<InputBox
											label="Branch Name"
											name="branchName"
											onChange={setValue}
										/>
									</div>
									<div className="flex flex-col gap-0.5">
										<InputBox
											label="Account Number"
											name="accountNumber"
											onChange={setValue}
										/>
									</div>
								</div>
								<div className="flex justify-start gap-10 items-center">
									<div className="self-center">
										<Button label="Confirm" type="submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddAccount;
