import React, {useState} from "react";
import CreatableSelect from "react-select/creatable";

const options = [
	{value: "chocolate", label: "Chocolate"},
	{value: "strawberry", label: "Strawberry"},
	{value: "vanilla", label: "Vanilla"},
];
const BasicInfo = () => {
	// eslint-disable-next-line no-unused-vars
	const [categories, setCategories] = useState([]);
	return (
		<div className="max-w-xl">
			<div className="w-full flex flex-col gap-4">
				<input
					required
					type="text"
					className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Product Name"
				/>
				<p className="text-primary pl-3 text-sm -mt-2">You must enter a product name</p>
				<textarea
					rows="4"
					className="w-full resize-none text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
					placeholder="Descriptions"
				></textarea>
				<CreatableSelect
					className="shadow-sm"
					isMulti
					options={options}
					onChange={setCategories}
					placeholder="Select Multiple Categories"
				/>
				<CreatableSelect className="shadow-sm" isMulti options={options} onChange={setCategories} placeholder="Select Multiple Tags" />
			</div>
		</div>
	);
};

export default BasicInfo;
