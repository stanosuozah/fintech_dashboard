import React from "react";
import DateCard from "../../Common/DateCard";

const Bills = () => {
	return (
		<div className="flex">
			<div className="relative h-auto w-full md:w-1/5"></div>
			<div className="md:flex-1 w-full h-full">
				<div className="flex flex-col gap-3 bg-white text-left px-3 py-3">
					<h1 className="text-[#878787] font-bold text-xl">Upcoming Bills</h1>
					<div className="">
						<div className="flex flex-col shadow-md rounded-lg">
							<div className="-m-1.5 overflow-x-auto">
								<div className="p-1.5 min-w-full inline-block align-middle">
									<div className="overflow-hidden ">
										<table className="min-w-full divide-y divide-gray-200 w-full">
											<thead>
												<tr>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs text-black font-bold text-[#191919;]"
													>
														Due Date
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs text-black font-bold text-[#191919;]"
													>
														Logo
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs text-black font-bold text-[#191919;]"
													>
														Item Description
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs text-black font-bold text-[#191919;]"
													>
														Last Charge
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs text-black font-bold text-[#191919;]"
													>
														Amount
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
												<tr>
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
														<DateCard month="Jun" day="15" />
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
														<img
															src="/images/mastercard.png"
															width={80}
															height={20}
														/>
													</td>
													<td className="px-6 max-w-sm py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
														<h1 className="text-left font-Inter text-base font-bold text-black">
															Figma - Yearly Plan
														</h1>
														<p className=" text-xs whitespace-normal max-w-[32ch] text-justify  text-[#9F9F9F]  font-Inter">
															For advanced security and more flexible controls,
															the Professional plan helps you scale design
															processes company-wide
														</p>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-[#9F9F9F] font-Inter">
														14 May 2023
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
														<div className="rounded-[8px] px-3 py-2 border-gray-400 border font-bold font-Inter text-[#191919] text-sm">
															$150
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bills;
