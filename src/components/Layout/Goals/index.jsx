import React from "react";
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
	return (
		<div className="flex px-1">
			<div className="relative h-auto w-1/5"></div>
			<div className="flex-1 h-full">
				<div className="flex flex-col gap-3 bg-[#E8E8E8] text-left px-3 py-3">
					<h1 className="text-[#878787] font-bold text-xl">Goals</h1>
					<div className="flex justify-between gap-3 ">
						<div className="w-2/5 p-3 flex flex-col gap-4 rounded-md shadow-md bg-white pb-0">
							<div className="flex justify-between border-b-2 pb-4">
								<h1 className="font-Inter text-[#191919] font-bold text-sm">
									Savings Goal
								</h1>
								<select>
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
								<AdjustButton label="Adjust Goal" />
							</div>
						</div>
						<div className="bg-white flex-1 p-3 rounded-md shadow-md">
							<Line options={options} data={data} />
						</div>
					</div>
					<h1 className="text-[#878787] font-bold text-xl">
						Expenses Goals by Category
					</h1>
					<div className="grid grid-cols-3 gap-4">
						<ExpenseGoalCard expenseCategory="Housing" expenseTotal="250.00" />
						<ExpenseGoalCard expenseCategory="Food" expenseTotal="250.00" />
						<ExpenseGoalCard
							expenseCategory="Transportation"
							expenseTotal="250.00"
						/>
						<ExpenseGoalCard
							expenseCategory="Entertainment"
							expenseTotal="250.00"
						/>
						<ExpenseGoalCard expenseCategory="Shopping" expenseTotal="250.00" />
						<ExpenseGoalCard expenseCategory="Others" expenseTotal="250.00" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Goals;
