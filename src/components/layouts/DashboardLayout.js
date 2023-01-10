import React, {useState} from "react";
import DashboardRightMessageNav from "../navbar/DashboardRightMessageNav";
import SideBar from "../navbar/SideBar";
import TopBar from "../navbar/TopBar";
const DashboardLayout = ({children}) => {
	const [hideSideBar, setHideSideBar] = useState(false);
	return (
		<div className="font-roboto select-none">
			<div className="flex items-start ">
				<SideBar hideSideBar={hideSideBar} />
				<TopBar hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
				<DashboardRightMessageNav />
			</div>
			<div className={`h-full relative  w-full pr-[88px] pt-[50px] ${hideSideBar ? "pl-6" : "pl-[264px]"} duration-500`}>{children}</div>
		</div>
	);
};

export default DashboardLayout;
