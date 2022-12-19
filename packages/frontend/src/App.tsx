import React, { useState } from "react";
import From from "./components/Form";

import "./styles.css";

export interface ErrorInterface {
	name?: string;
	message?: string;
}

function App() {
	// React States
	const [errorMessages, setErrorMessages] = useState<ErrorInterface>({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<div className='app'>
			<div className='login-form'>
				<div className='title'>Sign In</div>
				{isSubmitted ? (
					<div>User is successfully logged in</div>
				) : (
					<From
						setIsSubmitted={setIsSubmitted}
						setErrorMessages={setErrorMessages}
            errorMessages={errorMessages}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
