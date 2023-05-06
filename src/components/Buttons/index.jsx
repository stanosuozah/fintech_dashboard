import React from "react";

const Button = ({ label, icon, type = "button", onClick }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className="text-white bg-[#299D91] justify-center hover:bg-[#299D95]/90 focus:ring-4 w-full focus:outline-none focus:ring-[#299D93]/50 font-medium rounded-sm text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#299D91]/55 mr-2 mb-2"
		>
			{label}
			{icon && <span className="ml-2">{icon}</span>}
		</button>
	);
};

export default Button;
