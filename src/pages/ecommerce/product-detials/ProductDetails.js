import {faArrowLeft, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import ECommerceLayout from "../../../components/layouts/ECommerceLayout";
import ProductDetailsTabs from "./ProductDetailsTabs";
const ProductDetails = () => {
	return (
		<ECommerceLayout>
			<div className="pt-4 max-w-6xl mx-auto mb-10">
				<Link to="/products" className="flex items-center gap-2 text-gray-600 cursor-pointer">
					<FontAwesomeIcon icon={faArrowLeft} />
					<h4 className="font-sans-pro text-lg font-semibold">Products</h4>
				</Link>
				<div className="flex mt-6 gap-10 items-center justify-between">
					<div className="flex items-center gap-4">
						<img
							src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000"
							className="h-20 w-20 object-cover rounded-md border flex-shrink-0 "
							alt=""
						/>
						<div>
							<h4 className="text-2xl font-bold font-sans-pro text-muted">New Product</h4>
							<p className="text-sm max-w-lg text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia ullam animi, optio perferendis adipisci tempore
								doloribus. Veniam, fugit est!
							</p>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<button className="bg-red-800 hover:bg-rose-700 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-2 text-sm  ">
							<span>Remove</span> <FontAwesomeIcon className="" icon={faTrash} />
						</button>
						<button className="bg-primary hover:bg-indigo-500 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-2 text-sm  ">
							<span>Save</span> <FontAwesomeIcon className="" icon={faSave} />
						</button>
					</div>
				</div>
				<div className="mt-10 pb-10">
					<ProductDetailsTabs />
				</div>
			</div>
		</ECommerceLayout>
	);
};

export default ProductDetails;
