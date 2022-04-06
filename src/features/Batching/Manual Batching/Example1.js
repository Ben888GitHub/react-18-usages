import React, { useState, useEffect } from 'react';

function Example1() {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [renderCount, setRenderCount] = useState(0);

	useEffect(() => {
		setRenderCount(renderCount + 1);
	}, [counter1, counter2, counter3]);

	const handleClick = () => {
		setCounter1(counter1 + 1);
		setCounter2(counter2 + 1);
		setCounter3(counter3 + 1);
		// setRenderCount(renderCount + 1);
	};

	return (
		<>
			<h1>Function Component</h1>
			<div>Counter1: {counter1}</div>
			<div>Counter2: {counter2}</div>
			<div>Counter3: {counter3}</div>
			<br />
			<div>Component was rendered {renderCount} times</div>
			<button onClick={handleClick}>Click me</button>
		</>
	);
}

export default Example1;
