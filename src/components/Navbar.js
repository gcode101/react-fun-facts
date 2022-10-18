import logo from '../logo.webp';

function Navbar () {
	return (
		<div className='nav'>
			<div className='header'>
				<img src={logo} className="logo" alt="logo" />
				<h1>ReactFacts</h1>
			</div>
			<div>
				<h2> React Course - Project 1</h2>
			</div>
		</div>
	);
}

export default Navbar;