import React from "react";

const CheckBox = ({ id, value, label }) => {
	return (
		<div className="flex items-center mr-4">
			<input
				id={id}
				type="checkbox"
				value={value}
				className="w-4 h-4 accent-[#299D91] cursor-pointer  bg-gray-100 border-gray-300 rounded"
			/>
			<label htmlFor={id} className="ml-2 text-sm font-medium text-[#191D23]">
				{label}
			</label>
		</div>
	);
};

export default CheckBox;
