import React from "react";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ExpenseCard from "../../ExpenseCard";
import UpChartIcon from "../../../assets/icons/UpChartIcon";
import DownChartIcon from "../../../assets/icons/DownChartIcon";
import FoodIcon from "../../../assets/icons/FoodIcon";
// import faker from "faker";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const up = <UpChartIcon />;
const down = <DownChartIcon />;

const labels = [
	"Housing",
	"Food",
	"Entertainment",
	"Transportation",
	"Shopping",
	"Others",
];

const data = {
	labels,
	datasets: [
		{
			label: "Expenses",
			Title: "Expenses",
			data: [65, 59, 80, 81, 56, 55],
			backgroundColor: ["#299D91"],
			tooltip: {
				formatter: (value) => "$" + value.toFixed(2),
			},
		},
		{
			label: "Cost",
			Title: "Cost",
			data: [55, 40, 60, 49, 76, 50],
			backgroundColor: ["blue"],
			tooltip: {
				formatter: (value) => "$" + value.toFixed(2),
			},
		},
	],
};

const options = {
	plugins: {
		legend: {
			position: "top",
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			min: 0,
			max: 100,
			ticks: {
				stepSize: 20,
				callback: (value) => "$" + value + "k",
			},
		},
	},
};

const Expenses = () => {
	return (
		<div className="flex px-2 ">
			<div className="relative h-auto w-1/5"></div>
			<div className="flex-1 h-full">
				<div className="flex flex-col gap-3 bg-[#E8E8E8] text-left px-2 py-3">
					<h1 className="text-[#878787] font-bold text-xl">
						Expenses Comparison
					</h1>
					<div className="bg-white rounded-lg p-3">
						{/* <Bar options={options} data={data} /> */}
						<Bar options={options} data={data} />
					</div>
					<h1 className="text-[#878787] font-bold text-xl">
						Expense Breakdown
					</h1>
					<div className="grid grid-cols-3 gap-3 bg-white p-2">
						<ExpenseCard
							chartIcon={up}
							expenseCategory="Housing"
							expenseTotal="250.00"
							percent="15"
							expenseItem="House Rent"
							expenseItemPrice="230.00"
							expenseItemDate="17 May 2023"
						/>
						<ExpenseCard
							chartIcon={down}
							expenseCategory="Entertainment"
							expenseTotal="250.00"
							percent="15"
							expenseItem="House Rent"
							expenseItemPrice="230.00"
							expenseItemDate="17 May 2023"
						/>
						<ExpenseCard
							chartIcon={down}
							expenseCategory="Shopping"
							expenseTotal="250.00"
							percent="15"
							expenseItem="House Rent"
							expenseItemPrice="230.00"
							expenseItemDate="17 May 2023"
						/>
						<ExpenseCard
							chartIcon={down}
							expenseCategory="Transportation"
							expenseTotal="250.00"
							percent="15"
							expenseItem="House Rent"
							expenseItemPrice="230.00"
							expenseItemDate="17 May 2023"
						/>
						<ExpenseCard
							chartIcon={up}
							expenseCategory="Food"
							expenseTotal="250.00"
							percent="15"
							expenseItem="House Rent"
							expenseItemPrice="230.00"
							expenseItemDate="17 May 2023"
						/>
						<ExpenseCard
							chartIcon={up}
							expenseCategory="Others"
							expenseTotal="250.00"
							percent="15"
							expenseItem="House Rent"
							expenseItemPrice="230.00"
							expenseItemDate="17 May 2023"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Expenses;
