import React, { useState, useEffect } from 'react';

function WithoutTransition() {
	const [search_text, setSearchText] = useState('');

	const [search_result, setSearchResult] = useState();

	const handleChange = (e) => {
		setSearchText(e.target.value);
	};

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

						<div>
							{index + 1}. {search_text}
						</div>
					</div>
				);
			});

			const list = <div>{rows}</div>;

			setSearchResult(list);
		}
	}, [search_text]);

	return (
		<div>
			<header>
				<div>
					<div>
						<input type="text" value={search_text} onChange={handleChange} />
					</div>

					<div>{search_result}</div>
				</div>
			</header>
		</div>
	);
}

export default WithoutTransition;
