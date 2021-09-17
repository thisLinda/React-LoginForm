import React from 'react';

// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
export default class NavBar extends React.Component {
  render() {
		return(
			<nav className="navbar navbar-expand-sm navbar-dark bg-info">
				<a className="navbar-brand" href="#">Stronger Voice App</a>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Volume Exercises</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Duration Exercises</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Pitch Exercises</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}