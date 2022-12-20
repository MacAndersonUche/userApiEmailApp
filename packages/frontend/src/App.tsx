import React, { createContext, useState } from "react";
import "./styles.css";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUpForm from "./components/SignUpForm";
import Dummy from "./pages/Dummy";
import { State } from "./types/user";
import { reducer } from "./reducers";

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
				<div className='app'>
					{!state.isAuthenticated ? (
						<Routes>
							<Route path='/' element={<LoginForm />} />
							<Route path='/register' element={<SignUpForm />} />
						</Routes>
					) : (
						<Dummy />
					)}
				</div>
			</Router>
		</AppContext.Provider>
	);
}

export default App;
