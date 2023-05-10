import React from "react";
import EditIcon from "../../assets/icons/EditIcon";

const AdjustButton = ({ label, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="cursor-pointer border-2 border-[#299D91] flex justify-between gap-2 px-5 py-2 w-full"
		>
			<p className="font-Inter font-bold text-xs text-[#299D91]">{label}</p>
			<EditIcon />
		</div>
	);
};

export default AdjustButton;
