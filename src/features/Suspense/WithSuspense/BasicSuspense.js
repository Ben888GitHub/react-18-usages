import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const BasicComponent = lazy(() => import('./BasicComponent'));
function BasicSuspense() {
	const [products, setProducts] = useState([]);

	const addProduct = () => {
		setProducts([
			...products,
			{ id: products.length + 1, name: 'Product ' + (products.length + 1) }
		]);
	};

	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BasicComponent />
			{/* <h2>Hi</h2> Normal JSX Tag is also working */}
			{/* todo............ */}
			{/* ProductList */}
			{products.map((product, index) => (
				<div key={index}>
					<h2>{product.name}</h2>
				</div>
			))}
			{/*  */}
			{/* AddProduct */}
			<button onClick={addProduct}>Add Product</button>
			{/* SingleProduct */}
			{/* Refer to CatList app and see if there's any loading */}
		</Suspense>
	);
}

export default BasicSuspense;
