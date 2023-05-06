import React from "react";
import GoogleIcon from "../../assets/icons/GoogleIcon";

const GoogleButton = () => {
	return (
		<button
			type="button"
			className="w-full text-[#4B5768] bg-[#E4E7EB] gap-2 justify-center hover:bg-[#E4E7EB]/90 focus:ring-4 focus:outline-none focus:ring-[#4B5768]/50 font-medium rounded-sm text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4B5768]/55 mr-2 mb-2"
		>
			<GoogleIcon />
			Continue with Google
		</button>
	);
};

export default GoogleButton;
