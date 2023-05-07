import React, { useEffect, useState } from "react";
import Button from "../../components/Buttons";
import GoogleButton from "../../components/GoogleButton/Index";
import InputBox from "../../components/InputBox";
import CheckBox from "../../components/CheckBox";
import Logo from "../../assets/icons/Logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../../components/Common/Toast";

const ForgotPassword = () => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const [toast, setToast] = useState("");

	useEffect(() => {
		if (token) {
			navigate("/");
		}

		// if (token) {
		// 	// (async function fetchUser() {
		// 	// 	try {
		// 	// 		// const decodeToken = jwt.verify(token, "chatappbysamuel280692");
		// 	// 		// const { id } = decodeToken;
		// 			// const id = "11";
		// 			setLoader(true);
		// 			// const response = await axios.get(
		// 			// 	`https://finebank.onrender.com/api/v1/auth/`,
		// 			// 	{ headers: { Authorization: `Bearer ${token}` } }
		// 			// );
		// 			// // localStorage.setItem("token", response.data.token);
		// 			if (response.data) {
		// 				dispatch(setUser(response.data));
		// 				navigate("/");
		// 			}

		// 		// 	// console.log(response);
		// 		// } catch (error) {
		// 		// 	setLoader(false);
		// 		// 	console.log(error.message);
		// 		// }
		// 	})();
		// }
	}, [token]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"https://finebank.onrender.com/api/v1/reset-password/",
				{ email: value }
			);
			setToast("Please check your email");

			setTimeout(() => {
				setToast("");
			}, 5000);
		} catch (error) {
			setToast(error.message);
			console.log(error);
			setTimeout(() => {
				setToast("");
			}, 5000);
		}
	};

	return (
		<div className="flex flex-col md:justify-center md:items-center min-h-screen w-full px-4 mt-10 md:mt-0 md:px-0">
			{toast && <Toast message={toast} />}
			<div className="max-w-sm flex flex-col gap-y-8  w-full">
				<div className="text-center flex flex-col gap-y-4 justify-center items-center w-full">
					<Logo />
					<h1 className="text-2xl font-bold font-Inter">Forgot Password?</h1>
					<p className="font-Inter text-sm md:text-base text-[#666666] max-w-[32ch]">
						Enter your email address to get the password reset link
					</p>
				</div>
				<form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
					<InputBox
						label="Email Address"
						required
						type="email"
						name="email"
						onChange={(e) => setValue(e.target.value)}
						placeholder="example@gmail.com"
					/>

					<Button type="submit" label="Password Reset" />

					<Link
						to="/login"
						className="font-Inter text-[#999DA3] font-bold text-sm cursor-pointer ml-1 md:text-base"
					>
						Back to login
					</Link>
				</form>
			</div>
		</div>
	);
};

export default ForgotPassword;
