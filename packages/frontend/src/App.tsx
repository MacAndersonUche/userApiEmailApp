import React, { useState } from "react";
import "./styles.css";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUpForm from "./components/SignUpForm";
import Dummy from "./pages/Dummy";

export interface ErrorInterface {
	name?: string;
	message?: string;
}

function App() {
	// React States
	const [errorMessages, setErrorMessages] = useState<ErrorInterface>({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<Router>
			<div className='app'>
				<Routes>
					<Route
						path='/'
						element={
							<LoginForm
								setIsSubmitted={setIsSubmitted}
								setErrorMessages={setErrorMessages}
								errorMessages={errorMessages}
							/>
						}
					/>
					<Route
						path='/signup'
						element={
							<SignUpForm
								setIsSubmitted={setIsSubmitted}
								setErrorMessages={setErrorMessages}
								errorMessages={errorMessages}
							/>
						}
					/>
					<Route path='/api/dummy' element={<Dummy />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
