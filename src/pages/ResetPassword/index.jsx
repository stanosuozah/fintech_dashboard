import React, { useEffect, useState } from "react";
import Button from "../../components/Buttons";
import GoogleButton from "../../components/GoogleButton/Index";
import InputBox from "../../components/InputBox";
import CheckBox from "../../components/CheckBox";
import Logo from "../../assets/icons/Logo";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../../components/Common/Toast";

const ResetPassword = () => {
	const { id } = useParams();
	const [value, setValue] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
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
	// console.log(id);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (value === confirmPassword) {
			try {
				const response = await axios.post(
					`https://finebank.onrender.com/api/v1/update-password`,
					{ password: value, resetToken: id }
				);
				setToast("Successfully updated your password");
				setTimeout(() => {
					navigate("/login");
				}, 5000);
			} catch (error) {
				setToast(error.message);
				console.log(error);
				setTimeout(() => {
					setToast("");
				}, 3000);
			}
		} else {
			setToast("Password does not match!");
			// console.log(error);
			setTimeout(() => {
				setToast("");
			}, 3000);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center min-h-screen w-full">
			{toast && <Toast message={toast} />}
			<div className="max-w-sm flex flex-col gap-y-8  w-full">
				<div className="text-center flex flex-col gap-y-4 justify-center items-center w-full">
					<Logo />
					<h1 className="text-2xl font-bold font-Inter">Reset Password</h1>
					<p className="font-Inter text-sm text-[#666666] max-w-[32ch]">
						Enter and confirm new password to reset your password
					</p>
				</div>
				<form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
					<InputBox
						label="New Password"
						required
						type="password"
						name="password"
						onChange={(e) => setValue(e.target.value)}
						placeholder="*******"
					/>
					<InputBox
						label="Confirm Password"
						required
						type="password"
						name="password"
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder="*******"
					/>

					<Button type="submit" label="Reset Password" />
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
