import React, { useState, useEffect, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useNavigate
} from 'react-router-dom';

const CatList = React.lazy(() => import('./CatList'));
const AddCat = React.lazy(() => import('./AddCat'));
const SingleCat = React.lazy(() => import('./SingleCat'));

function WithSuspense() {
	const [cats, setCats] = useState([]);
	// let navigate = useNavigate();
	// const showData = () => {

	// }

	return (
		<div className="container p-5">
			<div className="row justify-content-sm-center">
				<div className="col-sm-5">
					<React.Suspense fallback={<span>Loading...</span>}>
						<Router>
							<ol>
								<Link
									to="/"
									className="breadcrumb-item"
									activeclassname="active"
								>
									Home
								</Link>
								<Link
									to="/add"
									className="breadcrumb-item"
									activeclassname="active"
								>
									Add Cat
								</Link>
							</ol>
							<Routes>
								<Route path="/" element={<CatList cats={cats} />} />
								{/* <Route
									path="/add"
									render={(props) => {
										return (
											<AddCat
												onSubmit={(cat) => {
													setCats([...cats, cat]);
													props.history.push('/');
												}}
											/>
										);
									}}
								/> */}
								<Route
									path="/add"
									element={
										<AddCat
											onSubmit={(cat) => {
												setCats([...cats, cat]);
											}}
										/>
									}
								/>
								<Route path="/cat/:name" element={<SingleCat cats={cats} />} />
							</Routes>
						</Router>
					</React.Suspense>
				</div>
			</div>
		</div>
	);
}

export default WithSuspense;
