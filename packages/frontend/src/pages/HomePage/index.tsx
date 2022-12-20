import React from "react";
import Navbar from "../../components/NavBar";
import { User } from "../../types/user";
import { Routes, Route } from "react-router-dom";
import AllUsers from "../AllUsers";
import ChatPage from "../ChatPage";
import EmailPage from "../EmailCreation";

const HomePage = () => {
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
	}, [data]);
	return (
		<div>
			<Navbar />

			<Routes>
				<Route
					path='/'
					element={<h1>You Have Access To All Macs Services</h1>}
				/>
				<Route path='/allUsers' element={<AllUsers />} />
				<Route path='/livechat' element={<ChatPage />} />
				<Route path='/email' element={<EmailPage />} />
			</Routes>
		</div>
	);
};

export default HomePage;
