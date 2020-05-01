import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Rights from './Rights';
import Stakeholders from './Stakeholders';
import Conclusion from './Conclusion';
import '../styles/Navigation.css';

function Navigation() {
	return (
		<Router>
			<nav className="wrapper">
				<ul className="navi">
					<li>
						<Link to="/"> Home </Link>
					</li>
					<li>
						<Link to="/rights"> Rights </Link>
					</li>
					<li>
						<Link to="/stakeholders"> Stake Holders </Link>
					</li>
					<li>
						<Link to="/conclusion"> Conclusion </Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/rights" component={Rights}></Route>
				<Route exact path="/stakeholders" component={Stakeholders}></Route>
				<Route exact path="/conclusion" component={Conclusion}></Route>
			</Switch>
		</Router>
	);
}

export default Navigation;
