import React from "react";
import { AppContext } from "../../App";
import FormInput from "../FormInput";
export const Login = () => {
	const { dispatch } = React.useContext(AppContext);
	const initialState = {
		username: "",
		password: "",
		isSubmitting: false,
		errorMessage: null,
	};
	const [data, setData] = React.useState(initialState);
	const handleFormSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setData({
			...data,
			isSubmitting: true,
			errorMessage: null,
		});
		fetch("http://localhost:5100/login", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: data.username,
				password: data.password,
			}),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw res;
			})
			.then((resJson) => {
				dispatch({
					type: "LOGIN",
					payload: resJson,
				});
			})
			.catch((error) => {
				setData({
					...data,
					isSubmitting: false,
					errorMessage: error.message || error.statusText,
				});
			});
	};
	return (
		<div className='login-container'>
			<div className='card'>
				<div className='container'>
					<form onSubmit={handleFormSubmit}>
						<h1>Login</h1>
						<FormInput
							type='text'
							value={data.username}
							onChange={(event) =>
								setData({ ...data, username: event.target.value })
							}
							name='username'
							label='Username'
							placeholder="Enter your username"
						/>
						<FormInput
							type='password'
							value={data.password}
							onChange={(event) =>
								setData({ ...data, password: event.target.value })
							}
							name='password'
							label='Password'
							placeholder="Enter your password"
						/>

						{data.errorMessage && (
							<span className='form-error'>{data.errorMessage}</span>
						)}

						<button disabled={data.isSubmitting}>
							{data.isSubmitting ? "Loading..." : "Login"}
						</button>

						<a href='/register'>Don't have an account?</a>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Login;
