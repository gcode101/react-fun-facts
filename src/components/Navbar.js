import logo from '../logo.webp';
import React from "react"
import Main from "./Main"

function Navbar (props) {

	return (
		<nav className={props.darkMode ? "dark" : ""}>
			<div className='header'>
				<img src={logo} className="logo" alt="logo" />
				<h1>ReactFacts</h1>
			</div>
			<div className="toggler">
				<p className="toggler--light">Light</p>
				<div className="toggler--slider" onClick={props.toggleDarkMode}>
					<div className="toggler--slider--circle"></div>
				</div>
				<p className="toggler--dark">Dark</p>
			</div>
		</nav>
	);
}

export default Navbar;