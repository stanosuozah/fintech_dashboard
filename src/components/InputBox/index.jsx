import React from "react";
import EyeIcon from "../../assets/icons/EyeIcon";
import { Link } from "react-router-dom";

const InputBox = ({
	label,
	name,
	rightLabel,
	rightLabelAction,
	type = "text",
	error,
	...rest
}) => {
	return (
		<div>
			<div className="flex justify-between items-center">
				{label && (
					<label
						htmlFor={name}
						className="block text-sm mb-2 font-Inter text-[#191D23] font-medium"
					>
						{label}
					</label>
				)}
				{rightLabel && (
					<Link
						to={rightLabelAction}
						className="text-sm text-[#299D91] decoration-2 hover:underline font-medium"
					>
						{rightLabel}
					</Link>
				)}
			</div>
			<div className="relative">
				<input
					type={type}
					{...rest}
					name={name}
					className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-[#4B5768] focus:ring-blue-500 border"
				/>

				{error && (
					<div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
						<svg
							className="h-5 w-5 text-red-500"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
							aria-hidden="true"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
						</svg>
					</div>
				)}
			</div>
			{error && (
				<p className="text-xs text-red-600 mt-2" id="password-error">
					8+ characters required
				</p>
			)}
		</div>
	);
};

export default InputBox;
