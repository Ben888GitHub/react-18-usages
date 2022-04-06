import React, { useState, useEffect } from 'react';
import Example1 from './Example1';
import Example2 from './Example2';

function WithoutSuspense() {
	const [loading, setLoading] = useState(true);
	const [myData, setMyData] = useState(null);
	const [buttonName, setButtonName] = useState(`Show My Component`);

	useEffect(() => {
		if (myData != null) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [myData]);

	const showData = () => {
		myData === null ? setMyData(true) : setMyData(null);
		// setLoading(false);
		setButtonName(
			buttonName === `Show My Component`
				? `Hide My Component`
				: `Show My Component`
		);
	};

	return (
		<>
			<button onClick={showData}>{buttonName}</button>
			{!loading && <Example1 />}
			{loading && <Example2 />}
		</>
	);
}

export default WithoutSuspense;
