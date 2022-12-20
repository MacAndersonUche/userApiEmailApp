import React from "react";
import Navbar from "../../components/NavBar";
import { Routes, Route } from "react-router-dom";
import AllUsers from "../AllUsers";
import ChatPage from "../ChatPage";
import EmailPage from "../EmailCreation";

const HomePage = () => {
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
