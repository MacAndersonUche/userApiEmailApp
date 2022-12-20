import React, { createContext } from "react";
import "./styles.css";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUpForm from "./components/SignUpForm";
import { State } from "./types/user";
import { reducer } from "./reducers";
import HomePage from "./pages/HomePage";

export interface ErrorInterface {
	name?: string;
	message?: string;
}

export const initialState = {
	isAuthenticated: false,
	user: null,
	token: null,
};

export const AppContext = createContext<{
	state: State;
	dispatch: React.Dispatch<any>;
}>({
	state: initialState,
	dispatch: () => null,
});

function App() {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<AppContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			<Router>
				{!state.isAuthenticated ? (
					<div className="app">
						<Routes>
							<Route path='/' element={<LoginForm />} />
							<Route path='/register' element={<SignUpForm />} />
						</Routes>
					</div>
				) : (
					<HomePage />
				)}
			</Router>
		</AppContext.Provider>
	);
}

export default App;
