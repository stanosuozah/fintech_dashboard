import Button from "../../Buttons";
import { useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import { useState } from "react";
import Loader from "../../Loader";
import Toast from "../../Common/Toast";
import axios from "axios";

const Settings = () => {
	const { user } = useSelector((state) => state.user);
	const [loader, setLoader] = useState(false);
	const [toast, setToast] = useState("");
	const [tab, setTab] = useState("account");
	const [value, setValue] = useForm({});
	const [inputActive, setInputActive] = useState(true);

	const token = localStorage.getItem("token");

	const handleUpdate = async () => {
		try {
			// const decodeToken = jwt.verify(token, "chatappbysamuel280692");
			// const { id } = decodeToken;
			// const id = "11";
			setLoader(true);
			const response = await axios.put(
				`https://finebank.onrender.com/api/v1/update-user`,
				value,
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			// localStorage.setItem("token", response.data.token);
			if (response.data) {
				// dispatch(setUser(response.data));
				setLoader(false);
				setToast("Successfully updated account");
				setTimeout(() => {
					setToast("");
				}, 3000);
			}
			setInputActive(true);

			// console.log(response);
		} catch (error) {
			setLoader(false);
			console.log(error.message);
			setToast(error.messages);
			setTimeout(() => {
				setToast("");
			}, 3000);
		}
	};

	return (
		<>
			{loader && <Loader />}
			{toast && <Toast message={toast} />}
			<div className="md:flex">
				<div className="relative h-auto md:w-1/3 lg:w-1/5"></div>
				<div className="md:w-2/3 lg:flex-1 w-full h-full">
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
										Username
									</h3>
									<input
										type="text"
										disabled={inputActive}
										className={`text-xs text-[#878787] font-Inter ${
											!inputActive ? "border-2 px-3 py-1 rounded-md" : "ml-4"
										}`}
										defaultValue={user?.username}
										onChange={setValue}
										name="username"
									/>
									<h3 className=" text-[#525256] font-bold text-base font-Inter">
										Full name
									</h3>
									<input
										type="text"
										disabled={inputActive}
										className={`text-xs text-[#878787] font-Inter ${
											!inputActive ? "border-2 px-3 py-1 rounded-md" : "ml-4"
										}`}
										defaultValue={user?.name}
										onChange={setValue}
										name="name"
									/>

									<h3 className=" text-[#525256] font-bold text-base font-Inter">
										Email
									</h3>
									<p className="ml-4 text-xs text-[#878787] font-Inter">
										{user?.email}
									</p>
									<h3 className=" text-[#525256] font-bold text-base font-Inter">
										Phone Number
									</h3>
									<input
										type="text"
										disabled={inputActive}
										className={`text-xs text-[#878787] font-Inter ${
											!inputActive ? "border-2 px-3 py-1 rounded-md" : "ml-4"
										}`}
										defaultValue={user?.phoneNumber}
										onChange={setValue}
										name="phoneNumber"
									/>

									<div className="mt-6">
										{inputActive && (
											<Button
												label="Edit Details"
												onClick={() => setInputActive(!inputActive)}
											/>
										)}
										{!inputActive && (
											<Button label="Update Details" onClick={handleUpdate} />
										)}
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
		</>
	);
};

export default Settings;
