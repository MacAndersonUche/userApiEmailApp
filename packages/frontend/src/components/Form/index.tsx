import { ErrorInterface } from "../../App";
import { database, errors } from "./constants";


interface Props {
    setErrorMessages: (errorMessages: { name: string; message: string }) => void;
    setIsSubmitted: (isSubmitted: boolean) => void;
    errorMessages: ErrorInterface
}

// JSX code for login form
const From = ({setErrorMessages,setIsSubmitted, errorMessages }: Props) => {
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

	// Generate JSX code for error message
	const renderErrorMessage = (name: string) =>
		name === errorMessages.name && (
			<div className='error'>{errorMessages.message}</div>
		);
	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<div className='input-container'>
					<label>Username </label>
					<input type='text' name='uname' required />
					{renderErrorMessage("uname")}
				</div>
				<div className='input-container'>
					<label>Password </label>
					<input type='password' name='pass' required />
					{renderErrorMessage("pass")}
				</div>
				<div className='button-container'>
					<input type='submit' />
				</div>
			</form>
		</div>
	);
};

export default From;
