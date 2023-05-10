import React, { useState } from "react";
import axios from "axios";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ExpenseGoalCard from "../../ExpenseGoalCard";
import AdjustButton from "../../AdjustButton";
import TargetIcon from "../../../assets/icons/TargetIcon";
import TargetMonthIcon from "../../../assets/icons/TargetMonthIcon";
import Modal from "../../Common/Modal";
import { Input } from "postcss";
import InputBox from "../../InputBox";
import Button from "../../Buttons";
import useForm from "../../../hooks/useForm";
import Loader from "../../Loader";
import Toast from "../../Common/Toast";
//   import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			data: [2000, 2500, 3000, 2000, 4000, 3700, 4900],
			borderColor: "#299D91",
			backgroundColor: "transparent",
			pointBorderColor: "transparent",
			pointBorderWidth: 4,
			tension: 0.5,
		},
	],
};

const options = {
	plugins: {
		legend: false,
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			min: 0,
			max: 5000,
			ticks: {
				stepSize: 500,
				callback: (value) => "$" + value,
			},
			grid: {
				borderDash: [10],
			},
		},
	},
};

const Goals = () => {
	const [openModal, setOpenModal] = useState(false);
	const [toast, setToast] = useState("");
	const [loader, setLoader] = useState(false);
	const [value, setValue] = useForm({});

	const token = localStorage.getItem("token");
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoader(true);
			const response = await axios.post(
				`https://finebank.onrender.com/api/v1/create-goal`,
				value,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			setLoader(false);
			setOpenModal(false);
			setToast("Target Amount successfully added!");
			setTimeout(() => {
				setToast("");
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

			<div className="md:flex relative ">
				<div className="relative h-auto md:w-1/3 lg:w-1/5"></div>
				<div className="md:w-2/3 lg:flex-1 w-full h-full relative ">
					{toast && <Toast message={toast} />}
					{openModal && (
						<Modal open={openModal} setOpen={setOpenModal}>
							<form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
								<InputBox
									label="Target Amounts"
									placeholder="$1000"
									name="targetAmount"
									onChange={setValue}
								/>
								<InputBox
									label="Present Amounts"
									name="achievedAmount"
									placeholder="Write present amounts here"
									onChange={setValue}
								/>
								<div className="self-center">
									<Button label="Save" type="submit" />
								</div>
							</form>
						</Modal>
					)}
					<div className="flex flex-col gap-2 bg-[#E8E8E8] text-left px-2 md:px-3 py-3">
						<h1 className="text-[#878787] font-bold text-xl">Goals</h1>
						<div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-3 ">
							<div className="md:w-1/2 w-full p-3 flex flex-col gap-4 rounded-md shadow-md bg-white ">
								<div className="flex justify-between border-b-2 pb-4">
									<h1 className="font-Inter text-[#191919] font-bold text-sm">
										Savings Goal
									</h1>
									<select className="font-Inter text-xs font-medium">
										<option className="font-Inter text-sm">
											01 May - 31 May
										</option>
									</select>
								</div>
								<div className="flex justify-between">
									<div className="flex flex-col gap-2">
										<div className="flex justify-between gap-3">
											<TargetIcon />
											<div className="flex flex-col">
												<p className="font-inter text-xs text-[#878787]">
													Target Achieved
												</p>
												<h1 className="font-Inter text-[#191919] font-bold">
													$12,500
												</h1>
											</div>
										</div>
										<div className="flex justify-between gap-3">
											<TargetMonthIcon />
											<div className="flex flex-col">
												<p className="font-inter text-xs text-[#878787]">
													Target Achieved
												</p>
												<h1 className="font-Inter text-[#191919] font-bold">
													$12,500
												</h1>
											</div>
										</div>
									</div>
									<div>
										<div>Another chart</div>
										<p>Target vs Achievement</p>
									</div>
								</div>
								<div className="self-center">
									<AdjustButton
										onClick={() => setOpenModal(true)}
										label="Adjust Goal"
									/>
								</div>
							</div>
							<div className="bg-white md:w-1/2 lg:flex-1 p-3 rounded-md shadow-md">
								<Line options={options} data={data} />
							</div>
						</div>
						<h1 className="text-[#878787] font-bold text-base md:text-xl">
							Expenses Goals by Category
						</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
							<ExpenseGoalCard
								expenseCategory="Housing"
								expenseTotal="250.00"
							/>
							<ExpenseGoalCard expenseCategory="Food" expenseTotal="250.00" />
							<ExpenseGoalCard
								expenseCategory="Transportation"
								expenseTotal="250.00"
							/>
							<ExpenseGoalCard
								expenseCategory="Entertainment"
								expenseTotal="250.00"
							/>
							<ExpenseGoalCard
								expenseCategory="Shopping"
								expenseTotal="250.00"
							/>
							<ExpenseGoalCard expenseCategory="Others" expenseTotal="250.00" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Goals;
