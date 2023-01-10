import React from "react";

const Shipping = () => {
	return (
		<div className="max-w-xl">
			<div className="w-full flex items-center justify-between mb-4 gap-4">
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Width"
				/>
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Height"
				/>
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Depth"
				/>
			</div>
			<div className="w-full flex flex-col gap-4">
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Weight"
				/>
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Extra Shipping Fee"
				/>
			</div>
		</div>
	);
};

export default Shipping;
