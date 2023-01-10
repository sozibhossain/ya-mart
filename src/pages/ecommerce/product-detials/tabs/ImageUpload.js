import {faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import album from "../../../../asset/images/album.jpeg";
const ImageUpload = () => {
	const productImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div>
			<div className="flex flex-wrap gap-4">
				<label className="cursor-pointer h-32 w-[125.5px] p-2 text-gray-500 border rounded-md flex flex-col items-center  justify-center text-3xl">
					<FontAwesomeIcon icon={faUpload} />
					<span className="mt-2 block text-sm leading-normal">Upload Files</span>
					<input type="file" className="hidden" />
				</label>
				{productImg.map((each) => (
					<div key={each} className="h-32  w-[125.5px]  p-2 border rounded-md">
						<img src={album} className="h-full w-full object-cover rounded" alt="" />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageUpload;
