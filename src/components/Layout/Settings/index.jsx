import React, { useState } from "react";
import Button from "../../Buttons";

const Settings = () => {
	const [tab, setTab] = useState("account");
	return (
		<div className="flex">
			<div className="relative h-auto w-1/5"></div>
			<div className="flex-1 h-full px-3 py-2">
				<div className="px-3 py-3 flex flex-col rounded-lg bg-white shadow-xl">
					<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
						<ul className="flex flex-wrap -mb-px">
							<li className="mr-2">
								<span
									onClick={() => setTab("account")}
									className={`${
										tab === "account"
											? " text-[#299D91] border-[#299D91] "
											: " text-[#525256] border-transparent "
									}cursor-pointer inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
								>
									Account
								</span>
							</li>
							<li className="mr-2">
								<span
									onClick={() => setTab("security")}
									className={`${
										tab === "security"
											? " text-[#299D91] border-[#299D91] "
											: " text-[#525256] border-transparent "
									}cursor-pointer inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 `}
								>
									Security
								</span>
							</li>
						</ul>
					</div>
					{tab === "account" ? (
						<div className="flex justify-between">
							<div className="flex flex-col gap-2 items-start mt-6">
								<h3 className=" text-[#525256] font-bold text-base font-Inter">
									Full name
								</h3>
								<p className="ml-4 text-xs text-[#878787] font-Inter">
									Stanley Osuozah
								</p>
								<h3 className=" text-[#525256] font-bold text-base font-Inter">
									Email
								</h3>
								<p className="ml-4 text-xs text-[#878787] font-Inter">
									osuozahstanley@yahoo.com
								</p>
								<h3 className=" text-[#525256] font-bold text-base font-Inter">
									Phone Number
								</h3>
								<p className="ml-4 text-xs text-[#878787] font-Inter">
									+880 | 51547508660
								</p>
								<div className="mt-6">
									<Button label="Update Profile" />
								</div>
							</div>
							<div className="flex flex-col gap-2 items-center mt-6  w-1/2">
								<p className="font-Inter text-xs font-bold text-[#666666]">
									Your Profile Picture
								</p>
								<img src="../images/stanimage.jpg" width={80} height={80} />
							</div>
						</div>
					) : (
						<div className="flex flex-col gap-2 items-start mt-6">
							<h3 className=" text-[#525256] font-bold text-base font-Inter">
								Old Password
							</h3>
							<p className="ml-4 text-xs text-[#878787] font-Inter">
								*************
							</p>
							<h3 className=" text-[#525256] font-bold text-base font-Inter">
								New Password
							</h3>
							<p className="ml-4 text-xs text-[#878787] font-Inter">
								*************
							</p>
							<h3 className=" text-[#525256] font-bold text-base font-Inter">
								Retype Password
							</h3>
							<p className="ml-4 text-xs text-[#878787] font-Inter">
								*************
							</p>
							<h3 className=" text-[#525256] font-bold text-base font-Inter">
								Phone Number
							</h3>
							<p className="ml-4 text-xs text-[#878787] font-Inter">
								+880 | 51547508660
							</p>
							<div className="mt-6">
								<Button label="Update Password" />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Settings;
