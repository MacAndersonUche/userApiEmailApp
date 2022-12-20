import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

export default function Navbar() {
	const { dispatch } = React.useContext(AppContext);

	const handleLogout = () => {
		dispatch({
			type: "LOGOUT",
		});

	};

	return (
		<nav className='navigation'>
			<h2 className='brand-name'>
				MacUserSecureAPI
			</h2>
			<div className='navigation-menu'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/allUsers'>All Users</Link>
					</li>
					<li>
						<Link to='/livechat'>Live Chat</Link>
					</li>
					<li>
						<Link to='/email'>Email Sender</Link>
					</li>
					<li>
						<button onClick={handleLogout}>SignOut</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
