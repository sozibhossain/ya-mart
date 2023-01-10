import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FormInputClass, FormLabel} from "../../../components/AuthPageComponents";

const RegistrationForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleFormSubmit} className="space-y-4 ">
			<div>
				<FormLabel text={"Full Name"} />
				<input required type="text" className={FormInputClass} placeholder="John Due" />
			</div>
			<div>
				<FormLabel text={"Email Address"} />
				<input required type="text" className={FormInputClass} placeholder="example@gmail.com" />
			</div>
			<div>
				<FormLabel text={"Password"} />
				<div className="relative">
					<input required type={showPassword ? "text":"password"} className={FormInputClass} placeholder="Enter Password" />
					<FontAwesomeIcon
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
						icon={showPassword ? faEyeSlash : faEye}
					/>
				</div>
			</div>
			<div>
				<FormLabel text={"Company"} />
				<input required type="text" className={FormInputClass} placeholder="Example Software Agency" />
			</div>
			<div className="flex items-center gap-2 text-sm text-muted tracking-wide">
				<input
					required
					type="checkbox"
					id="agree-with-condition"
					className="w-3.5 h-3.5 rounded border-gray-300 text-primary focus:ring-primary"
				/>
				<label htmlFor="agree-with-condition" className="cursor-pointer flex items-center gap-1">
					<span>I agree with</span>
					<Link to="/terms-and-conditions" className="text-primary font-medium ">
						Terms
					</Link>
					<span>and</span>
					<Link to="/privacy-and-policy" className="text-primary font-medium ">
						Privacy Policy
					</Link>
				</label>
			</div>
			<div className="pt-2">
				<button type="submit" className="w-full rounded-full py-2 bg-primary hover:bg-indigo-500 duration-300 text-white">
					Sign up
				</button>
			</div>
		</form>
	);
};

export default RegistrationForm;
