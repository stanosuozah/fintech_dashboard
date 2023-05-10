import React from "react";

const Modal = ({ children, open, setOpen }) => {
	return (
		<div className="absolute inset-0 flex justify-center items-center z-20 bg-[#191919] bg-opacity-[0.15] min-w-full min-h-screen w-full h-full">
			{/* Close popup using white space */}
			<div
				className="absolute w-full h-full bg-transparent inset-0 "
				onClick={() => setOpen(!open)}
			/>
			<div className="shadow-lg rounded-lg h-auto px-8 py-12 w-full max-w-sm bg-white relative z-30 ">
				<span
					onClick={() => setOpen(!open)}
					className="cursor-pointer absolute top-3 right-3 font-Inter  text-2xl p-2"
				>
					x
				</span>
				{children}
			</div>
		</div>
	);
};

export default Modal;
