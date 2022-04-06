import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function SingleCat({ cats }) {
	const [cat, setCat] = useState();

	let params = useParams();
	const { name } = params;
	const foundCat = cats.filter((cat) => cat.slug === name);
	let navigate = useNavigate();

	useEffect(() => {
		// console.log(params);

		console.log(foundCat);

		!foundCat.length && navigate('/');

		setCat(foundCat[0]);
	}, []);

	return (
		<div className="card">
			{/* {cat && <img style={{maxWidth: '100%'}} src={cat.picURL} />} */}
			<div className="card-body">
				<h2 className="card-title">Hi my name is, {cat && cat.name}</h2>
			</div>
		</div>
	);
}

export default SingleCat;
