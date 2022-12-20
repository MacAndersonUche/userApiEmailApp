import { Link } from "react-router-dom";
import useAuthLogin from "../../hooks/useAuth";
import FormInput from "../FormInput";


const SignUpForm = () => {
	const { handleFormSubmit, data, setData } = useAuthLogin("http://localhost:5100/signup", true);
	return (
		<div className='login-container'>
			<div className='card'>
				<div className='container'>
					<form onSubmit={handleFormSubmit}>
						<h1>Create Account</h1>
						<FormInput
							type='email'
							name='email'
							value={data.email}
							onChange={(event) =>
								setData({ ...data, email: event.target.value })
							}
							label='Email'
							placeholder='Enter your Email'
						/>
						<FormInput
							type='text'
							value={data.username}
							onChange={(event) =>
								setData({ ...data, username: event.target.value })
							}
							name='username'
							label='Username'
							placeholder='Enter your username'
						/>
						<FormInput
							type='password'
							value={data.password}
							onChange={(event) =>
								setData({ ...data, password: event.target.value })
							}
							name='password'
							label='Password'
							placeholder='Enter your password'
						/>
						<div className='button-container'>
							<input type='submit' />
						</div>
						<Link to='/'>Already Have an Account?</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
