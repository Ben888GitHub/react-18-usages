import React, { useState, useEffect } from 'react';

function Example2() {
	const [toggle, setToggle] = useState(false);
	const [counter1, setCounter1] = useState(-1);
	const [counter2, setCounter2] = useState(-1);
	const [counter3, setCounter3] = useState(-1);
	const [renderCount, setRenderCount] = useState(0);

	useEffect(() => {
		setCounter1(counter1 + 1);
		setCounter2(counter2 + 1);
		setCounter3(counter3 + 1);
	}, [toggle]);

	useEffect(() => {
		setRenderCount(renderCount + 1);
	}, [counter1, counter2, counter3]);

	const handleClick = () => {
		setToggle(!toggle);
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

export default Example2;
