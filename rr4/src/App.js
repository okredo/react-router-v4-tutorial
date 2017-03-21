import React from 'react';
import { BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

const Links = () => (
  <nav>
	<Link to="/">Home</Link>
	<Link to={{ pathname: '/about'}}>About</Link>
	<Link replace to="/contact">Contact</Link>
  </nav>
)

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
