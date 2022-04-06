import React, { useState, useEffect, useDeferredValue } from 'react';

function DefferedValue() {
	const [search_text, setSearchText] = useState('');

	const [search_result, setSearchResult] = useState();

	const handleChange = (e) => {
		setSearchText(e.target.value);
	};

	const deferredValue = useDeferredValue(search_result, {
		timeoutMs: 3000
	});

	useEffect(() => {
		if (search_text === '') {
			setSearchResult(null);
		} else {
			const rows = Array.from(Array(5000), (_, index) => {
				return (
					<div key={index}>
						<img
							style={{ width: 30, height: 30 }}
							src="https://www.ethode.com/contentAsset/raw-data/84e3be24-58bc-499c-9d50-f8088158f11a/image"
							className="App-logo"
							alt="logo"
						/>

						<>
							{index + 1}. {search_text}
						</>
					</div>
				);
			});

			const list = <>{rows}</>;

			setSearchResult(list);
		}
	}, [search_text]);

	return (
		<>
			<header>
				<>
					<>
						<input type="text" value={search_text} onChange={handleChange} />
					</>
					<br />
					<>{deferredValue}</>
				</>
			</header>
		</>
	);
}

export default DefferedValue;
