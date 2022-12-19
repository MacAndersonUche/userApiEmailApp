import { useNavigate } from "react-router-dom";
import { ErrorInterface } from "../../App";
import { database, errors } from "../../constants";
import FormInput from "../FormInput";

interface Props {
	setErrorMessages: (errorMessages: { name: string; message: string }) => void;
	setIsSubmitted: (isSubmitted: boolean) => void;
	errorMessages: ErrorInterface;
}

// JSX code for login form
const LoginForm = ({
	setErrorMessages,
	setIsSubmitted,
	errorMessages,
}: Props) => {
	const navigate = useNavigate();

	const handleSubmit = (event: { preventDefault: () => void }) => {
		//Prevent page reload
		event.preventDefault();

		var { uname, pass } = document.forms[0];

		// Find user login info
		const userData = database.find((user) => user.username === uname.value);

		// Compare user info
		if (userData) {
			if (userData.password !== pass.value) {
				// Invalid password
				setErrorMessages({ name: "pass", message: errors.pass });
			} else {
				setIsSubmitted(true);
			}
		} else {
			// Username not found
			setErrorMessages({ name: "uname", message: errors.uname });
		}
	};


	const handleCreate = () => {
		navigate("/signup");
	}

	return (
		<div className='login-form'>
			<div className='title'>Sign In</div>
			<div className='form'>
				<form onSubmit={handleSubmit}>
					<FormInput
						label='Username'
						errorMessages={errorMessages}
						type='text'
						name='uname'
						required
					/>
					<FormInput
						label='Password'
						errorMessages={errorMessages}
						type='password'
						name='pass'
						required
					/>
					<div className='button-container'>
						<input type='submit' />
					</div>
					<a className="clickToCreate" onClick={handleCreate}>Dont Have an Account? Click to Create</a>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
