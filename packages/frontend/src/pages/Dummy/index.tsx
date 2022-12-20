import React from "react";
import { User } from "../../types/user";

const Dummy = () => {
	const [data, setData] = React.useState<User>({
		id: "",
		createdAt: new Date(),
		username: "",
		email: "",
		password: "",
	});

	React.useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("http://localhost:5100/api/getallusers", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			const data = await response.json();
			console.log(data);
			
			setData(data);
		};
		fetchData();
	}, []);
	return (
		<div>
			<h1>You Have Access To All Macs Services</h1>
		</div>
	);
};

export default Dummy;
