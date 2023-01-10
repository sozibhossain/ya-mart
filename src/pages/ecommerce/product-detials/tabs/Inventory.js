import React from "react";

const Inventory = () => {
	return (
		<div className="max-w-xl">
			<div className="w-full flex flex-col gap-4">
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="SKU"
				/>
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Quantity"
				/>
			</div>
		</div>
	);
};

export default Inventory;
