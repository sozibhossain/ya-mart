import {Link} from "react-router-dom";
import logo from "../asset/images/brand-logo.png";

export const FormInputClass =
	"w-full text-darken border border-gray-200 focus:ring-primary focus:ring-2 text-darken focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm";

export const FormLabel = ({text}) => {
	return <label className="block mb-1.5  text-muted text-sm font-medium tracking-wide">{text}</label>;
};
export const AuthPageTopInfo = ({title, subtitle, linkText, path}) => {
	return (
		<div className="mb-7 ">
			<img src={logo} className="h-20 relative -left-2 mb-3" alt="" />
			<h2 className="text-4xl tracking-wide text-darken font-bold font-sans-pro">{title}</h2>
			<p className="text-sm text-gray-600 mt-1 ">
				{subtitle}
				<Link to={path} className="text-primary font-medium">
					{linkText}
				</Link>
			</p>
		</div>
	);
};
