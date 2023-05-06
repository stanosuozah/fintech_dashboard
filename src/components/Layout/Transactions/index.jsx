import React, { useState } from "react";
import GameIcon from "../../../assets/icons/GameIcon";
import Button from "../../Buttons";
import FoodIcon from "../../../assets/icons/FoodIcon";
import HousingIcon from "../../../assets/icons/HousingIcon";

const Transactions = () => {
	const [tab, setTab] = useState("all");

	return (
		<div className="flex">
			<div className="relative h-auto w-1/5"></div>
			<div className="flex-1 h-full">
				<div className="flex flex-col gap-3 bg-[#E8E8E8] text-left px-3 py-3">
					<h1 className="text-[#878787] font-bold text-xl">
						Recent Transactions
					</h1>

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
					{/* TABLE */}
					<div className="flex flex-col bg-white">
						<div className="-m-1.5 overflow-x-auto">
							<div className="p-1.5 min-w-full inline-block align-middle">
								<div className="overflow-hidden">
									{tab === "all" ? (
										<table className="min-w-full divide-y bg-white divide-gray-200 ">
											<thead>
												<tr>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-left text-xs  text-black "
													>
														Items
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Shop Name
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Date
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Payment Method
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Amount
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
												<tr>
													<td className="px-6 py-4 whitespace-nowrap text-sm items-center flex gap-1 font-medium text-gray-800 dark:text-gray-200">
														<GameIcon />
														<h1 className="text-black font-Inter font-bold">
															GTR 5
														</h1>
													</td>
													<td className="px-6 py-4 whitespasce-nowrap text-sm text-gray-800 text-center">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															Gadget & Gear
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															17 May, 2023
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															Credit Card
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
														<h1 className="text-black font-Inter font-bold">
															$160.00
														</h1>
													</td>
												</tr>
											</tbody>
										</table>
									) : tab === "revenue" ? (
										<table className="min-w-full divide-y bg-white divide-gray-200 ">
											<thead>
												<tr>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-left text-xs  text-black "
													>
														Items
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Shop Name
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Date
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Payment Method
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Amount
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
												<tr>
													<td className="px-6 py-4 whitespace-nowrap text-sm items-center flex gap-1 font-medium text-gray-800 dark:text-gray-200">
														<HousingIcon />
														<h1 className="text-black font-Inter font-bold">
															Rent
														</h1>
													</td>
													<td className="px-6 py-4 whitespasce-nowrap text-sm text-gray-800 text-center">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															Housing
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															17 May, 2023
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															Debit Card
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
														<h1 className="text-black font-Inter font-bold">
															$2000.00
														</h1>
													</td>
												</tr>
											</tbody>
										</table>
									) : (
										<table className="min-w-full divide-y bg-white divide-gray-200 ">
											<thead>
												<tr>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-left text-xs  text-black "
													>
														Items
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Shop Name
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Date
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Payment Method
													</th>
													<th
														scope="col"
														className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
													>
														Amount
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
												<tr>
													<td className="px-6 py-4 whitespace-nowrap text-sm items-center flex gap-1 font-medium text-gray-800 dark:text-gray-200">
														<FoodIcon />
														<h1 className="text-black font-Inter font-bold">
															KFC
														</h1>
													</td>
													<td className="px-6 py-4 whitespasce-nowrap text-sm text-gray-800 text-center">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															KFC Chicken
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															17 May, 2023
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
														<p className="text-[#666666]  font-medium text-xs font-Inter">
															Credit Card
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
														<h1 className="text-black font-Inter font-bold">
															$160.00
														</h1>
													</td>
												</tr>
											</tbody>
										</table>
									)}
								</div>
							</div>
						</div>
						<div className="w-full max-w-[10rem] flex  self-center">
							<Button label="Load More" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
