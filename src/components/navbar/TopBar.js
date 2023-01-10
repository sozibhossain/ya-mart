import {faBars, faBell, faPrint, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useLocation} from "react-router-dom";
import indiaFlag from "../../asset/images/icons/india-flag.png";
import {menDummyImg} from "../ECommercePageComponents";
const TopBar = ({hideSideBar, setHideSideBar}) => {
	const {pathname} = useLocation();
	/**
	 * if your dashboard pathname will change?
	 * Then just replace the pathname in the className instead of "/" it will be your dashboard pathname
	 */
	return (
		<div
			className={` ${hideSideBar ? "pl-6" : "pl-[264px]"} duration-500 flex fixed  z-10 w-full ${
				pathname !== "/" ? "pr-6" : "pr-20"
			} h-[50px] bg-gray-100 border-b items-center justify-between`}
		>
			<div>
				<FontAwesomeIcon onClick={() => setHideSideBar(!hideSideBar)} className="cursor-pointer" icon={faBars} />
			</div>
			<div className="flex items-center gap-10 text-gray-500">
				<div className="flex items-center gap-4 text-xl">
					<img src={indiaFlag} className="cursor-pointer hover:text-darken duration-300 h-9 " alt="" />
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faSearch} />
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faPrint} />
					<div className="relative cursor-pointer">
						<FontAwesomeIcon className=" mr-2" icon={faBell} />
						<span className="w-[15px] h-[15px] inline-flex  items-center justify-center absolute  -top-1.5 -right-1 text-[10px] font-medium  rounded-full text-light bg-indigo-600 pt-[1px]">
							4
						</span>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<div className="text-right">
						<h5 className="text-darken font-semibold font-sans-pro">Brian Hughes</h5>
						<p className="text-sm -mt-1 text-gray-600">Admin</p>
					</div>
					<img src={menDummyImg} className="h-7 object-cover  w-7 ring-2 ring-offset-1 ring-primary rounded-full" alt="" />
				</div>
			</div>
		</div>
	);
};

export default TopBar;
