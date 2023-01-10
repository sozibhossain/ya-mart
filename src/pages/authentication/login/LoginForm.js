import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FormInputClass, FormLabel} from "../../../components/AuthPageComponents";
import apple from "../../../asset/images/icons/apple.png";
import google from "../../../asset/images/icons/google.png";
import facebook from "../../../asset/images/icons/facebook.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleFormSubmit} className="space-y-4">
			<div>
				<FormLabel text={"Email Address"} />
				<input required type="text" className={FormInputClass} placeholder="example@gmail.com" />
			</div>
			<div>
				<FormLabel text={"Password"} />
				<div className="relative">
					<input required type={showPassword ? "text" : "password"} className={FormInputClass} placeholder="Enter Password" />
					<FontAwesomeIcon
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
						icon={showPassword ? faEyeSlash : faEye}
					/>
				</div>
			</div>
			<div className="flex items-center justify-between text-sm text-muted font-medium tracking-wide">
				<div className="flex items-center gap-2 ">
					<input
						required
						type="checkbox"
						id="remember-me"
						className="w-3.5 h-3.5 rounded border-gray-300 text-primary focus:ring-primary"
					/>
					<label htmlFor="remember-me" className="cursor-pointer">
						Remember me
					</label>
				</div>
				<Link to="/forgot-password" className="text-primary font-medium">
					Forgot Password?
				</Link>
			</div>
			<div className="pt-2">
				<button type="submit" className="w-full rounded-full py-2 bg-primary hover:bg-indigo-500 duration-300 text-white">
					Sign In
				</button>
			</div>
			<div>
				<div className="flex items-center gap-5 pt-2">
					<p className="h-[1px] w-full bg-gray-300 rounded-full"></p>
					<p className="flex-shrink-0 text-gray-600 text-sm tracking-wide">Or continue with</p>
					<p className="h-[1px] w-full bg-gray-300 rounded-full"></p>
				</div>
				<div className="flex items-center justify-center mt-5 gap-3">
					<img src={google} className="h-8 cursor-pointer" alt="" />
					<img src={apple} className="h-9 cursor-pointer" alt="" />
					<img src={facebook} className="h-8 cursor-pointer" alt="" />
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
