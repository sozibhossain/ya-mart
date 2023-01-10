import { faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const Pricing = () => {
	return (
		<div className="max-w-xl">
			<div className="w-full flex flex-col gap-4">
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Tax Exclude Price ₹"
				/>
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Tax Include Price ₹"
				/>
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Tax Rate ₹"
				/>
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Compared Price ₹"
				/>
				<p className="text-sm text-gray-500 -mt-2 ml-3 flex items-center gap-2">
					<FontAwesomeIcon className="text-yellow-500" icon={faInfoCircle} />
					Add a compare price to show next to the real price
				</p>
			</div>
		</div>
	);
};

export default Pricing;
