import { ErrorInterface } from "../../App";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
    errorMessages: ErrorInterface
}

const FormInput = ({ label, errorMessages, name, ...props }: FormInputProps) => {
	// Generate JSX code for error message
	const renderErrorMessage = (name: string) =>
		name === errorMessages.name && (
			<div className='error'>{errorMessages.message}</div>
		);
	return (
		<div className='input-container'>
			<label>{label}</label>
			<input {...props} />
			{name && renderErrorMessage(name)}
		</div>
	);
};

export default FormInput;
