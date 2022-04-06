import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const convertToSlug = (text) => {
	return text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
};

const generateCat = () => {
	const catPhotos = ['cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg', 'cat-4.jpg'];
	const catRandomizerNum = Math.floor(Math.random() * (catPhotos.length + 1));
	return `/imgs/${catPhotos[catRandomizerNum]}`;
};

function AddCat(props) {
	const [catName, setCatName] = useState('');
	let navigate = useNavigate();

	return (
		<>
			<div className="form-group">
				<label>Cat name</label>
				<input
					placeholder="Mr. Frizzle"
					className="form-control"
					onChange={(e) => setCatName(e.target.value)}
				/>
				<small className="form-text text-muted">Pick a good cat name.</small>
			</div>
			<button
				className="btn btn-primary"
				onClick={() => {
					props.onSubmit &&
						catName.length &&
						props.onSubmit({
							name: catName.trim(),
							picURL: generateCat(),
							slug: convertToSlug(catName.trim())
						});
					navigate('/');
				}}
			>
				Submit
			</button>
		</>
	);
}

export default AddCat;
