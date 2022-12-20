import React from "react";
import { Link } from "react-router-dom";
import useAuthLogin from "../../hooks/useAuth";

export default function Navbar() {

    const {handleLogout} = useAuthLogin("http://localhost:5100/logout")
    

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
