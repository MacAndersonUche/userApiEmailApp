
import React from "react";
import { AppContext } from "../../App";
import useAuthLogin from "../../hooks/useAuth";
import FormInput from "../FormInput";
export const Login = () => {
   const {handleFormSubmit, data, setData} = useAuthLogin("http://localhost:5100/login")
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
