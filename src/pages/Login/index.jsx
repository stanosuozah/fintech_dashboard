import React, { useEffect, useState } from "react";
// import jwt from "jsonwebtoken";
import Button from "../../components/Buttons";
import GoogleButton from "../../components/GoogleButton/Index";
import InputBox from "../../components/InputBox";
import CheckBox from "../../components/CheckBox";
import Logo from "../../assets/icons/Logo";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import userSlice, { setUser } from "../../features/userSlice";
import Loader from "../../components/Loader";
import AuthLoader from "../../components/Loader/AuthLoader";

const Login = () => {
	const initialState = { email: "", password: "" };
	const [value, setValue] = useForm(initialState);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loader, setLoader] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoader(true);
			const response = await axios.post(
				"https://finebank.onrender.com/api/v1/login",
				value
			);
			localStorage.setItem("token", response.data.token);
			navigate("/");
		} catch (error) {
			setLoader(false);
			console.log(error.message);
		}
	};

	const token = localStorage.getItem("token");
	useEffect(() => {
		if (token) {
			(async function fetchUser() {
				try {
					// const decodeToken = jwt.verify(token, "chatappbysamuel280692");
					// const { id } = decodeToken;
					// const id = "11";
					setLoader(true);
					const response = await axios.get(
						`https://finebank.onrender.com/api/v1/auth/`,
						{ headers: { Authorization: `Bearer ${token}` } }
					);
					// localStorage.setItem("token", response.data.token);
					if (response.data) {
						dispatch(setUser(response.data));
						navigate("/");
					}

					// console.log(response);
				} catch (error) {
					setLoader(false);
					console.log(error.message);
				}
			})();
		}
	}, [token]);
	return (
		<div className="flex flex-col justify-center items-center min-h-screen w-full px-4 md:px-0 ">
			{loader && <AuthLoader />}
			<div className="max-w-sm flex flex-col gap-y-12  w-full px">
				<div className="text-center flex justify-center items-center w-full">
					<Logo />
				</div>
				<form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
					<InputBox
						label="Email Address"
						required
						type="email"
						name="email"
						placeholder="johndo@gmail.com"
						onChange={setValue}
					/>
					<InputBox
						required
						type="password"
						name="password"
						rightLabel="Forgot Password?"
						label="Password"
						rightLabelAction="/forgotpassword"
						onChange={setValue}
					/>
					<CheckBox label="Keep me signed in" />
					<Button label="Login" type="submit" />
					<div className="font-Inter py-2 flex items-center text-xs text-gray-400  before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 ">
						or sign in with
					</div>
					<GoogleButton />
					<Link
						to="/signup"
						className="text-[#299D91] text-sm font-bold cursor-pointer font-Inter"
					>
						Create an account
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Login;
