import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Rights from './Rights';
import Stakesholders from './Stakeholders';
import Conclusion from './Conclusion';
import References from './References';
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
				<Route exact path="/Rights" component={Rights}></Route>
				<Route exact path="/Stakesholders" component={Stakesholders}></Route>
				<Route exact path="/Conclusion" component={Conclusion}></Route>
				<Route exact path="/References" component={References}></Route>
			</Switch>
		</Router>
	);
}

export default Navigation;
