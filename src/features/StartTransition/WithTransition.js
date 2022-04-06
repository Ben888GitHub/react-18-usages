import React, { useState, useEffect, useTransition } from 'react';

function WithTransition() {
	const [search_text, setSearchText] = useState('');

	const [search_result, setSearchResult] = useState();
	const [isPending, startTransition] = useTransition();
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

						<>
							{index + 1}. {search_text}
						</>
					</div>
				);
			});

			const list = <>{rows}</>;

			startTransition(() => {
				setSearchResult(list);
			});
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
					<>
						{isPending && <span>Loading...</span>}
						{!isPending && search_result}
					</>
				</>
			</header>
		</>
	);
}

export default WithTransition;
