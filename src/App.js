import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Competencies from './pages/Competencies';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <>
    	<BrowserRouter>
    	    <Switch>
	    		<Route path="/" exact component={Home} />
	    		<Route path="/competencies" component={Competencies} />
	    		<Route path="/contact" component={Contact} />
	    		<Route path="/portfolio" component={Portfolio} />
	    		<Route component={NotFound} />
    		</Switch>
    	</BrowserRouter>
    </>
    );
};

export default App;