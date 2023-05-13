import React, { useEffect, useState } from "react";
import BalanceCard from "../../BalanceCard";
import MasterCardIcon from "../../../assets/icons/MasterCardIcon";
import VisaIcon from "../../../assets/icons/VisaIcon";
import EmptyBalanceCard from "../../EmptyBalanceCard";
import TotalBalanceCard from "../../TotalBalanceCard";
import TargetIcon from "../../../assets/icons/TargetIcon";
import TargetMonthIcon from "../../../assets/icons/TargetMonthIcon";
import { Link, useNavigate } from "react-router-dom";
import BillsCard from "../../BillCard";
import RecentTransactionCard from "../../RecentTransactionCard";
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
import ExpenseBreakdownCard from "../../ExpenseBreakdownCard";
import ExpenseDownIcon from "../../../assets/icons/ExpenseDownIcon";
import ExpenseUpIcon from "../../../assets/icons/ExpenseUpIcon";
import GameIcon from "../../../assets/icons/GameIcon";
import OthersIcon from "../../../assets/icons/OthersIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import { useSelector } from "react-redux";
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

const labels = ["18 Mon", "19 Tue", "20 Wed", "21 Thu", "22 Fri"];
const labelsMonth = ["Jan", "Feb", "Mar", "Apr", "May"];
const labelsYear = ["2017", "2018", "2019", "2020", "2021"];

const dataYear = {
	labels: labelsYear,
	datasets: [
		{
			label: "Last Year",
			Title: "Last Year",
			data: [65, 59, 80, 81, 56, 55],
			backgroundColor: ["#299D91"],
			tooltip: {
				formatter: (value) => "$" + value.toFixed(2),
			},
		},
		{
			label: "This Year",
			Title: "This Year",
			data: [55, 40, 60, 49, 76, 50],
			backgroundColor: ["#E8E8E8"],
			tooltip: {
				formatter: (value) => "$" + value.toFixed(2),
			},
		},
	],
};
const dataMonth = {
	labels: labelsMonth,
	datasets: [
		{
			label: "Last Month",
			Title: "Last Month",
			data: [65, 59, 80, 81, 56, 55],
			backgroundColor: ["#299D91"],
			tooltip: {
				formatter: (value) => "$" + value.toFixed(2),
			},
		},
		{
			label: "This Month",
			Title: "This Month",
			data: [55, 40, 60, 49, 76, 50],
			backgroundColor: ["#E8E8E8"],
			tooltip: {
				formatter: (value) => "$" + value.toFixed(2),
			},
		},
	],
};
const data = {
	labels: labels,
	datasets: [
		{
			label: "Last week",
			Title: "Last week",
			data: [65, 59, 80, 81, 56, 55],
			backgroundColor: ["#299D91"],
			tooltip: {
				formatter: (value) => "$" + value.toFixed(2),
			},
		},
		{
			label: "This week",
			Title: "This week",
			data: [55, 40, 60, 49, 76, 50],
			backgroundColor: ["#E8E8E8"],
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
const token = localStorage.getItem("token");
const date = new Date();

const Overview = () => {
	const navigate = useNavigate();
	const [account, setAccount] = useState([]);
	const [tab, setTab] = useState("all");
	const [comparison, setComparison] = useState("weekly");
	const [weekly, setWeekly] = useState(true);
	const [monthly, setMonthly] = useState(false);
	const [yearly, setYearly] = useState(false);
	const [loader, setLoader] = useState(false);
	const [goal, setGoal] = useState([]);
	const [active, setActive] = useState(0);

	const handleActive = (action) => {
		setActive(active + action);
		console.log(account?.length);
		console.log(active);
		console.log(active >= 0 || active <= account?.length - 1);
	};
	useEffect(() => {
		if (token) {
			(async function fetchAccounts() {
				try {
					setLoader(true);
					const response = await axios.get(
						`https://finebank.onrender.com/api/v1/accounts`,
						{ headers: { Authorization: `Bearer ${token}` } }
					);
					setAccount(response.data);
					setLoader(false);
				} catch (error) {
					setLoader(false);
					console.log(error.message);
				}
			})();
		}
	}, [token]);

	const handleComparison = (e) => {
		setComparison(e.target.value);
	};

	useEffect(() => {
		comparison === "weekly" ? setWeekly(true) : setWeekly(false);
		comparison === "monthly" ? setMonthly(true) : setMonthly(false);
		comparison === "yearly" ? setYearly(true) : setYearly(false);
	}, [comparison]);

	useEffect(() => {
		if (token) {
			(async function fetchGoals() {
				try {
					setLoader(true);

					const response = await axios.get(
						`https://finebank.onrender.com/api/v1/goals`,
						{ headers: { Authorization: `Bearer ${token}` } }
					);
					setGoal(response.data);
					setLoader(false);

					// localStorage.setItem("token", response.data.token);
				} catch (error) {
					setLoader(false);
				}
			})();
		}
	}, [token]);
	const latestGoal = goal[goal.length - 1];
	return (
		<div className="flex">
			<div className="relative h-auto md:w-1/3 lg:w-1/5"></div>
			<div className="md:w-2/3 lg:flex-1 w-full h-full">
				<div className="flex flex-col  lg:flex-nowrap lg:flex  w-full md:gap-3 bg-[#E8E8E8] text-left px-2 md:px-4 py-3">
					<div className="flex flex-col md:flex-row   md:flex-wrap lg:flex-nowrap lg:flex lg:justify-between md:flex md:justify-between md:gap-3 w-full md:mt-4">
						<div className="flex flex-col  md:w-[48.5%] lg:w-1/3 lg:flex  gap-1 md:gap-2 w-full ">
							<h3 className="font-Inter font-medium text-lg text-[#878787]">
								Total Balance
							</h3>
							<div className="flex flex-col gap-1 px-3 py-2 w-full h-[232px] bg-white rounded-lg shadow-xl">
								<TotalBalanceCard
									accountType={account[active]?.accountType}
									balance={account[active]?.balance}
									cardImage="../images/mastercard.png"
									accountNumber={
										account[active]?.accountNumber
											.slice(0, -4)
											.replace(/./g, "*") +
										account[active]?.accountNumber.slice(-4)
									}
								/>
								<div className="flex justify-between items-center">
									<button
										disabled={active == 0}
										className={`${
											active == 0 ? "pointer-events-none" : ""
										}font-Inter text-xs font-bold`}
										onClick={() => handleActive(-1)}
									>
										<span className="mr-2">&lt;</span>Previous
									</button>
									<div className="flex justify-between gap-2">
										{account.map((i, index) => (
											<span
												className={`${
													active == index ? "bg-[#299D91]" : "bg-gray-400"
												} w-2 h-2 rounded-full `}
											></span>
										))}
									</div>
									<button
										disabled={active == account?.length - 1}
										className={`${
											active == account?.length - 1
												? "pointer-events-none"
												: " "
										}font-Inter text-xs font-bold`}
										onClick={() => handleActive(+1)}
									>
										Next<span className="ml-2">&gt;</span>
									</button>
								</div>
							</div>
						</div>
						<div className="flex flex-col   md:w-[48.5%] lg:w-1/3 gap-1 md:gap-2 w-full ">
							<h3 className="font-Inter font-medium text-lg text-[#878787]">
								Goals
							</h3>
							<div className="flex flex-col gap-7 px-4 py-5 w-full h-[232px] bg-white rounded-lg shadow-xl">
								<div className="flex justify-between items-center">
									<div className="flex justify-between gap-3 items-center">
										<h1 className="font-Inter text-[#191919] font-bold text-xl">
											$
											{latestGoal?.targetAmount
												? latestGoal?.targetAmount
												: "0.00"}
										</h1>
										<Link to="/goals">
											<svg
												width="32"
												height="32"
												viewBox="0 0 32 32"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													width="32"
													height="32"
													rx="4"
													fill="#D2D2D2"
													fill-opacity="0.25"
												/>
												<path
													d="M16 21.3333H22"
													stroke="#525256"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M19 10.3333C19.2652 10.0681 19.6249 9.91913 20 9.91913C20.1857 9.91913 20.3696 9.95571 20.5412 10.0268C20.7128 10.0978 20.8687 10.202 21 10.3333C21.1313 10.4647 21.2355 10.6206 21.3066 10.7921C21.3776 10.9637 21.4142 11.1476 21.4142 11.3333C21.4142 11.5191 21.3776 11.703 21.3066 11.8745C21.2355 12.0461 21.1313 12.202 21 12.3333L12.6667 20.6667L10 21.3333L10.6667 18.6667L19 10.3333Z"
													stroke="#525256"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</Link>
									</div>
									<span className="fontt-Inter font-medium text-[14px] text-[#525256]">
										{new Date(latestGoal?.month).toDateString()}
									</span>
								</div>
								<div className="flex justify-between gap-2">
									<div className="flex flex-col w-1/2 gap-2">
										<div className="flex justify-left gap-2">
											<TargetIcon />
											<div className="flex flex-col">
												<p className="font-Inter text-xs text-[#878787]">
													Target Achieved
												</p>
												<h1 className="font-Inter text-[#191919] font-bold">
													$
													{latestGoal?.targetAmount
														? latestGoal?.targetAmount
														: "0.00"}
												</h1>
											</div>
										</div>

										<div className="flex justify-left gap-2 ">
											<TargetMonthIcon />
											<div className="flex flex-col">
												<p className="font-Inter text-xs text-[#878787]">
													Achieved Amount
												</p>
												<h1 className="font-Inter text-[#191919] font-bold">
													$
													{latestGoal?.achievedAmount
														? latestGoal?.achievedAmount
														: "0.00"}
												</h1>
											</div>
										</div>
									</div>
									<div className="flex items-center justify-center">
										<p className="text-center text-[#191919] font-medium text-xs font-Inter">
											Target vs Achievement
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex lg:flex  lg:w-1/3  flex-col gap-2 w-full ">
							<div className="flex lg:flex justify-between items-center">
								<h3 className="font-Inter font-medium text-lg text-[#878787]">
									Upcoming Bill
								</h3>
								<Link>
									<p className="font-Inter text-xs font-bold text-[#878787]">
										View All &gt;
									</p>
								</Link>
							</div>
							<div className="flex flex-col gap-3 px-4 py-5 w-full h-[232px] bg-white rounded-lg shadow-xl">
								<BillsCard
									price={150}
									day="15"
									month="May"
									date={date.toLocaleDateString()}
									billTitle="Master - Monthly"
									logo="../images/mastercard.png"
								/>
								<BillsCard
									price={100}
									day="02"
									month="Jun"
									date={date.toLocaleDateString()}
									billTitle="Visa - Monthly"
									logo="../images/visa-credit-card.png"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col lg:flex md:flex-col md:col-span-12  lg:flex-row md:justify-between gap-2 md:gap-3">
						<div className="flex lg:flex md:col-span-6 flex-col w-full ">
							<div className="flex justify-between items-center px-1">
								<h3 className="font-Inter font-medium text-lg text-[#878787]">
									Recent Transactions
								</h3>
								<Link>
									<p className="font-Inter text-xs font-bold text-[#878787]">
										View All &gt;
									</p>
								</Link>
							</div>
							<div className="w-full bg-white rounded-lg mt-4 px-3 py-5">
								<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
									<ul className="flex flex-wrap -mb-px">
										<li className="mr-2">
											<span
												onClick={() => setTab("all")}
												className={`${
													tab === "all"
														? " text-[#299D91] border-[#299D91] "
														: " text-[#525256] border-transparent "
												}cursor-pointer inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
											>
												All
											</span>
										</li>
										<li className="mr-2">
											<span
												onClick={() => setTab("revenue")}
												className={`${
													tab === "revenue"
														? " text-[#299D91] border-[#299D91] "
														: " text-[#525256] border-transparent "
												}cursor-pointer inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
											>
												Revenue
											</span>
										</li>
										<li className="mr-2">
											<span
												onClick={() => setTab("expense")}
												className={`${
													tab === "expense"
														? " text-[#299D91] border-[#299D91] "
														: " text-[#525256] border-transparent "
												}cursor-pointer inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
											>
												Expenses
											</span>
										</li>
									</ul>
								</div>
								{tab === "all" ? (
									<div className="mt-3 flex flex-col gap-10 bg-white p-2">
										<RecentTransactionCard
											icon={<GameIcon />}
											price="150.00"
											title="Game"
											description="Game console"
										/>
										<RecentTransactionCard
											icon={<GameIcon />}
											price="150.00"
											title="Game"
											description="Game console"
										/>
										<RecentTransactionCard
											icon={<GameIcon />}
											price="150.00"
											title="Game"
											description="Game console"
										/>
										<RecentTransactionCard
											icon={<GameIcon />}
											price="150.00"
											title="Game"
											description="Game console"
										/>
										<RecentTransactionCard
											icon={<GameIcon />}
											price="150.00"
											title="Game"
											description="Game console"
										/>
										<RecentTransactionCard
											icon={<GameIcon />}
											price="150.00"
											title="Game"
											description="Game console"
										/>
									</div>
								) : tab === "revenue" ? (
									<div className="mt-3 flex flex-col gap-10 bg-white p-2">
										<RecentTransactionCard
											icon={<FoodIcon />}
											price="100.00"
											title="KFC"
											description="KFC Chicken"
										/>
										<RecentTransactionCard
											icon={<FoodIcon />}
											price="100.00"
											title="KFC"
											description="KFC Chicken"
										/>
										<RecentTransactionCard
											icon={<FoodIcon />}
											price="100.00"
											title="KFC"
											description="KFC Chicken"
										/>
										<RecentTransactionCard
											icon={<FoodIcon />}
											price="100.00"
											title="KFC"
											description="KFC Chicken"
										/>
										<RecentTransactionCard
											icon={<FoodIcon />}
											price="100.00"
											title="KFC"
											description="KFC Chicken"
										/>
										<RecentTransactionCard
											icon={<FoodIcon />}
											price="100.00"
											title="KFC"
											description="KFC Chicken"
										/>
									</div>
								) : (
									<div className="mt-3 flex flex-col gap-10 bg-white p-2">
										<RecentTransactionCard
											icon={<OthersIcon />}
											price="200.00"
											title="Software"
											description="Account Software"
										/>
										<RecentTransactionCard
											icon={<OthersIcon />}
											price="200.00"
											title="Software"
											description="Account Software"
										/>
										<RecentTransactionCard
											icon={<OthersIcon />}
											price="200.00"
											title="Software"
											description="Account Software"
										/>
										<RecentTransactionCard
											icon={<OthersIcon />}
											price="200.00"
											title="Software"
											description="Account Software"
										/>
										<RecentTransactionCard
											icon={<OthersIcon />}
											price="200.00"
											title="Software"
											description="Account Software"
										/>
										<RecentTransactionCard
											icon={<OthersIcon />}
											price="200.00"
											title="Software"
											description="Account Software"
										/>
									</div>
								)}
							</div>
						</div>
						<div className="w-full flex flex-col gap-2 lg:flex ">
							<div className="flex flex-col gap-4 lg:h-auto  relative">
								<div className="absolute top-12 flex justify-start items-center gap-2">
									<select
										value={comparison}
										onChange={handleComparison}
										class="font-Inter font-bold text-xs cursor-pointer text-[#191919] py-3 px-4 pr-4 block w-full border-gray-200 rounded-md  focus:border-green-500"
									>
										<option
											value="weekly"
											selected
											className="font-Inter font-bold text-xs text-[#191919]"
										>
											Weekly Comparison
										</option>
										<option
											value="monthly"
											className="font-Inter font-bold text-xs text-[#191919]"
										>
											Monthly Comparison
										</option>
										<option
											value="yearly"
											className="font-Inter font-bold text-xs text-[#191919]"
										>
											Yearly Comparison
										</option>
									</select>
								</div>
								{/* <Link className="absolute top-12 left-4 flex justify-start items-center gap-2">
									<p className="font-Inter font-bold text-xs text-[#191919] ">
										Weekly Comparison
									</p>
									<svg
										width="14"
										height="8"
										viewBox="0 0 14 8"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1L7 7L13 1"
											stroke="#525256"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Link> */}

								<h3 className="font-Inter font-medium text-lg text-[#878787]">
									Statistics
								</h3>
								<div className="bg-white rounded-lg px-3 w-full py-2 h-auto ">
									{weekly && <Bar options={options} data={data} />}
									{monthly && <Bar options={options} data={dataMonth} />}
									{yearly && <Bar options={options} data={dataYear} />}
									{/* {comparison === "Weekly Comparison" ? (
										<Bar options={options} data={data} />
									) : comparison === "Monthly Comparison" ? (
										<Bar options={options} data={dataMonth} />
									) : (
										<Bar options={options} data={dataYear} />
									)} */}
								</div>
							</div>

							<div className="flex flex-col gap-2">
								<div className="flex justify-between items-center">
									<h3 className="font-Inter font-medium text-lg text-[#878787]">
										Expenses Breakdown
									</h3>
									<p className="font-Inter font-medium text-xs text-[#878787]">
										"Compare to last month
									</p>
								</div>

								<div className="bg-white px-2 py-3 gap-2 grid-cols-2 md:gap-16 rounded-lg grid md:grid-cols-3 ">
									<ExpenseBreakdownCard
										expenseCategory="Housing"
										expenseAmount="250.00"
										percent="15"
										percentIcon={<ExpenseDownIcon />}
									/>
									<ExpenseBreakdownCard
										expenseCategory="Entertainment"
										expenseAmount="150.00"
										percent="15"
										percentIcon={<ExpenseUpIcon />}
									/>
									<ExpenseBreakdownCard
										expenseCategory="Food"
										expenseAmount="150.00"
										percent="15"
										percentIcon={<ExpenseUpIcon />}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
