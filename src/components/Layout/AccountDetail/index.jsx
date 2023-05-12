import React, { useEffect, useState } from "react";
import GameIcon from "../../../assets/icons/GameIcon";
import Button from "../../Buttons";
import { useParams } from "react-router-dom";
import Loader from "../../Loader";
import axios from "axios";
const AccountDetail = () => {
	const [loader, setLoader] = useState(false);
	const [account, setAccount] = useState({});
	const { id } = useParams();

	const token = localStorage.getItem("token");
	useEffect(() => {
		if (token) {
			(async function fetchAccounts() {
				try {
					setLoader(true);
					const response = await axios.get(
						`https://finebank.onrender.com/api/v1/accounts/${id}`,
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
	}, [id, token]);
	return (
		<>
			{loader && <Loader />}
			<div className="flex">
				<div className="relative h-auto md:w-1/3 lg:w-1/5"></div>
				<div className="md:w-2/3 lg:flex-1 w-full h-full">
					<div className="flex flex-col gap-3">
						<div className=" flex flex-col gap-3 bg-[#E8E8E8] text-left px-3 py-3">
							<h1 className="text-[#878787] font-bold text-lg">
								Account Details
							</h1>
							<div className="flex bg-white rounded-lg flex-col gap-6 px-6 py-6">
								<div className="flex flex-col md:flex-row md:justify-start gap:3 md:gap-32">
									<div className="flex flex-col">
										<p className="font-Inter text-xs  text-[#9F9F9F]">
											Bank Name
										</p>
										<h5 className="text-[#525256] capitalize text-base font-Inter font-bold">
											{account?.bankName}
										</h5>
									</div>
									<div className="flex flex-col gap-0.5">
										<p className="font-Inter text-xs text-[#9F9F9F]">
											Account Type
										</p>
										<h5 className="text-[#525256] capitalize text-base font-Inter font-bold">
											{account?.accountType}
										</h5>
									</div>
									<div className="flex flex-col gap-0.5">
										<p className="font-Inter text-xs text-[#9F9F9F]">Balance</p>
										<h5 className="text-[#525256] text-base font-Inter font-bold">
											${account?.balance}
										</h5>
									</div>
								</div>
								<div className="flex flex-col md:flex-row gap-3 md:justify-start md:gap-20">
									<div className="flex flex-col gap-0.5">
										<p className="font-Inter text-xs text-[#9F9F9F]">
											Branch Name
										</p>
										<h5 className="text-[#525256] text-base font-Inter font-bold">
											{account?.branchName}
										</h5>
									</div>
									<div className="flex flex-col gap-0.5">
										<p className="font-Inter text-xs text-[#9F9F9F]">
											Account Number
										</p>
										<h5 className="text-[#525256] text-base font-Inter font-bold">
											{account?.accountNumber}
										</h5>
									</div>
								</div>
								<div className="flex justify-start gap-10 items-center">
									<div className="self-center">
										<Button label="Edit Details" />
									</div>

									<p className=" cursor-pointer font-Inter text-[#666666] text-[12px] font-medium">
										Remove
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-3 bg-[#E8E8E8] text-left px-3 py-3">
							<h1 className="text-[#878787] font-bold text-xl">
								Transaction History
							</h1>

							<div className="flex flex-col bg-white">
								<div className="-m-1.5 overflow-x-auto">
									<div className="p-1.5 min-w-full inline-block align-middle">
										<div className="overflow-hidden">
											<table className="min-w-full divide-y bg-white divide-gray-200 ">
												<thead>
													<tr>
														<th
															scope="col"
															className="px-6 py-3 font-bold  font-Inter text-left text-xs  text-black "
														>
															Date
														</th>
														<th
															scope="col"
															className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
														>
															Status
														</th>
														<th
															scope="col"
															className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
														>
															Transaction Type
														</th>
														<th
															scope="col"
															className="px-6 py-3 font-bold  font-Inter text-center text-xs  text-black "
														>
															Receipt
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
															<p className="text-[#666666]  font-medium text-xs font-Inter">
																17 May, 2023
															</p>
														</td>
														<td className="px-6 py-4 whitespasce-nowrap text-sm text-gray-800 text-center">
															<p className="text-[#666666]  font-medium text-xs font-Inter">
																Completed
															</p>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
															<p className="text-[#666666]  font-medium text-xs font-Inter">
																Credit
															</p>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
															<p className="text-[#666666]  font-medium text-xs font-Inter">
																8C52d5DKDJ5
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
										</div>
									</div>
								</div>
							</div>
							<div className="self-center">
								<Button label="Load More" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountDetail;
