import './App.css';
import {
	Example1,
	Example2,
	ExampleAsync,
	WithoutTransition,
	WithTransition,
	WithoutSuspense,
	WithSuspense,
	BasicSuspense,
	Shows,
	DefferedValue
} from './features/index.js';

function App() {
	return (
		<div className="App">
			<h1>
				Welcome to React 18, please explore and understand more about the new
				features
			</h1>
			{/* <Example1 />
			<Example2 />
			<ExampleAsync /> */}
			{/* <WithoutTransition /> */}
			{/* <WithTransition /> */}
			{/* <WithoutSuspense /> */}
			{/* <WithSuspense /> */}
			{/* <BasicSuspense /> */}
			{/* <Shows /> */}
			<DefferedValue />
		</div>
	);
}

export default App;
