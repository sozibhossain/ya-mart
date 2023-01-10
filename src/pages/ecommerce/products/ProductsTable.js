import {faMinusCircle,  faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Pagination} from "../../../components/ECommercePageComponents";
import { productsTableData} from "../ecommerceContant";
const ProductsTable = () => {
	return (
		<div className="overflow-hidden w-full max-w-6xl mx-auto overflow-x-auto rounded-lg border border-gray-200">
			<table className="min-w-full divide-y divide-gray-100 text-sm">
				<thead className="bg-gray-100">
					<tr className="font-medium text-left text-darken">
						<th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-3 text-left">
							<input
								className="h-4 cursor-pointer w-4 rounded border-gray-200 text-primary focus:ring-primary"
								type="checkbox"
								id="SelectAll"
							/>
						</th>
						{productsTableData.header.map((each) => (
							<th key={each.id} className="whitespace-nowrap px-4 py-3">
								{each.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 text-muted">
					{productsTableData.row.map((each) => (
						<tr key={each.id}>
							<td className="sticky inset-y-0 left-0 bg-white px-4 py-3">
								<input
									className="h-4 w-4 cursor-pointer rounded border-gray-200 text-primary focus:ring-primary"
									type="checkbox"
									id={each.id}
								/>
							</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.title}</td>
							<td className="whitespace-nowrap px-4 py-3 ">{each.category}</td>
							<td className="whitespace-nowrap px-4 py-3 ">₹ {each.price}.00</td>
							<td className="whitespace-nowrap px-4 flex items-center  py-3">
								<FontAwesomeIcon
									icon={faMinusCircle}
									className="text-red-500 text-lg  hover:text-red-700 duration-300 cursor-pointer"
								/>
								<span className="inline-block text-center  w-10 ">{each.quantity}</span>
								<FontAwesomeIcon
									icon={faPlusCircle}
									className="text-green-600 text-lg hover:text-green-700 duration-300  cursor-pointer"
								/>
							</td>
							<td className="whitespace-nowrap px-4 py-3 text-green-600"> In stock</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination selectValue={""} increaseValue={""} />
		</div>
	);
};

export default ProductsTable;
