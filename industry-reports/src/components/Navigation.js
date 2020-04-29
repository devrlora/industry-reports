import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './';
import Rights from './';
import Stakes from './';
import Conclusion from './';
import References from './';
import '../App.css';

function Navigation() {
	return (
		<Router>
			<nav className="">
				<ul className="">
					<li>
						<Link to="/"> Home Page </Link>
					</li>
					<li>
						<Link to="/"> Rights </Link>
					</li>
					<li>
						<Link to="/"> Stakes </Link>
					</li>
					<li>
						<Link to="/"> Conclusion </Link>
					</li>
					<li>
						<Link to="/"> References </Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/" component={Rights}></Route>
				<Route exact path="/" component={Stakes}></Route>
				<Route exact path="/" component={References}></Route>
			</Switch>
		</Router>
	);
}

export default Navigation;
