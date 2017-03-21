import React from 'react';
import { BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import './App.css';

const isActiveFn = (match, location) => {
  console.log(match, location, 'match, location');
  return match;
};

const Links = () => (
  <nav>
	<NavLink exact activeClassName="active" to="/">Home</NavLink>
	<NavLink activeStyle={{color: 'green'}} to={{ pathname: '/about'}}>About</NavLink>
	<NavLink isActive={isActiveFn} activeClassName="active" replace to="/contact">Contact</NavLink>
  </nav>
);

const Home = (props) => {
	console.log(props, 'props');
  	return <h1>Home</h1>
};

const App = () => (

  <Router>
	<div>
	  <Links />
	  <Route exact path="/" component={Home} />
	  <Route path="/about"
			 children={({match})=> match && <h1>About</h1>} />
	  <Route path="/contact" render={()=> <h1>Contact</h1>} />

	</div>
  </Router>
);


export default App;
