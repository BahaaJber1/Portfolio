import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./ui/Header";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="components-test" element={<Header />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
