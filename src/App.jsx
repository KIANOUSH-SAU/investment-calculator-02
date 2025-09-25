import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 1000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});
	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput, //So all the old values are copied into this new object
				[inputIdentifier]: +newValue,
			};
		});
	}
	return (
		<>
			<Header />
			<UserInput investment={userInput} onChange={handleChange} />
		</>
	);
}

export default App;
