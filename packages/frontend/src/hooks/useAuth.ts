import React from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const useAuthLogin = (location: string, creation: boolean = false) => {
	const navigate = useNavigate();
	const { dispatch } = React.useContext(AppContext);
	const initialState = {
		username: "",
		email: "",
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
		fetch(location, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: !creation
				? JSON.stringify({
						username: data.username,
						password: data.password,
				  })
				: JSON.stringify({
						username: data.username,
						email: data.email,
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

	const handleLogout = () => {
		dispatch({
			type: "LOGOUT",
		});

		setData({
			...data,
			isSubmitting: false,
			errorMessage: null,
		});

		navigate("/");
	};

	return {
		handleFormSubmit,
		handleLogout,
		data,
		setData,
	};
};

export default useAuthLogin;
