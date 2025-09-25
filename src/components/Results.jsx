import { calculateInvestmentResults } from "../util/investment";
export default function Results({ investment }) {
	const resultsData = calculateInvestmentResults(investment);
	return (
		// <table>
		// 	<thead>
		// 		<th>
		// 			<tr></tr>
		// 			<tr></tr>
		// 			<tr></tr>
		// 			<tr></tr>
		// 			<tr></tr>
		// 		</th>
		// 	</thead>
		// 	<tbody></tbody>
		// </table>
		<>
			<p>{investment.initialInvestment}</p>
			<pre>{JSON.stringify(investment, null, 2)}</pre>
		</>
	);
}
