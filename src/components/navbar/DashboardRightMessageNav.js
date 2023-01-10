import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import Scrollbars from "react-custom-scrollbars";
import {menDummyImg} from "../ECommercePageComponents";

const DashboardRightMessageNav = () => {
	const userImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="h-screen top-0 bg-gray-100 border-l  flex flex-col text-center items-center pb-3 w-16 fixed right-0 z-20">
			<div className="h-[50px] mb-10 flex items-center flex-shrink-0 border-b  w-full justify-center">
				<FontAwesomeIcon className="text-gray-500 text-3xl" icon={faMessage} />
			</div>
			<Scrollbars>
				<ul className=" pl-2  mb-3  space-y-4">
					{userImg.map((each) => (
						<li key={each} className="relative cursor-pointer">
							<img className="w-11 h-11 border object-cover rounded-full" src={menDummyImg} alt="" />
							<span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white  rounded-full"></span>
						</li>
					))}
				</ul>
			</Scrollbars>
		</div>
	);
};

export default DashboardRightMessageNav;
