import React, { useState } from "react";
import Button from "../../components/Buttons";
import GoogleButton from "../../components/GoogleButton/Index";
import InputBox from "../../components/InputBox";
import CheckBox from "../../components/CheckBox";
import Logo from "../../assets/icons/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../../hooks/useForm";
import Loader from "../../components/Loader";
import Toast from "../../components/Common/Toast";

const SignUp = () => {
	const navigate = useNavigate();
	const initialState = { name: "", email: "", password: "" };
	const [value, setValue] = useForm(initialState);
	const [loader, setLoader] = useState(false);
	const [toast, setToast] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoader(true);
		try {
			const response = await axios.post(
				"https://finebank.onrender.com/api/v1/register",
				value
			);
			localStorage.setItem("token", response.data.token);
			navigate("/");
		} catch (error) {
			setLoader(false);
			setToast(error.message);
			setTimeout(() => setToast(""), 3000);
		}
	};
	return (
		<>
			{loader && <Loader />}
			{toast && <Toast message={toast} />}

			<div className="flex flex-col justify-center items-center p-8  min-h-screen w-full">
				<div className="max-w-sm flex flex-col gap-y-8  w-full">
					<div className="text-center flex flex-col gap-y-4 justify-center items-center w-full">
						<Logo />
						<h1 className="text-2xl font-bold font-Inter">Create an account</h1>
					</div>
					<form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
						<InputBox
							label="Name"
							required
							name="name"
							type="text"
							placeholder="Stanley Osuozah"
							onChange={setValue}
						/>
						<InputBox
							label="Email Address"
							required
							name="email"
							type="email"
							placeholder="johndo@gmail.com"
							onChange={setValue}
						/>
						<InputBox
							required
							type="password"
							label="Password"
							name="password"
							onChange={setValue}
						/>
						<p className="text-[#4B5768] text-sm text-left">
							By continuing, you agree to our
							<Link className="text-[#299D91] text-sm"> terms of service</Link>
						</p>
						<Button label="Sign Up" type="submit" />
						<div className="font-Inter py-1 flex items-center text-xs text-gray-400  before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 ">
							or sign up with
						</div>
						<GoogleButton />
						<p className="text-sm  font-Inter text-[#999DA3] text-left ">
							Already have an account?
							<Link
								to="/login"
								className="text-[#299D91] font-bold cursor-pointer ml-1"
							>
								Sign in here
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUp;
