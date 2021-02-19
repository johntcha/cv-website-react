import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sidebar">
    	<div className="id">
    		<div className="idContent">
    			<img src="./images/photo_john.jpg" alt="profik-pic"/>
    			<h3>John Tcha</h3>
    		</div>
    	</div>

    	<div className="navigation">
    		<ul>
    			<li>
    			<NavLink exact to="/" activeClassName="navActive">
    				<i className="fas fa-home"></i>
    				<span>Accueil</span>
    			</NavLink>
    			</li>
    			<li>
    			<NavLink exact to="/competencies" activeClassName="navActive">
    				<i className="fas fa-brain"></i>
    				<span>Compétences</span>
    			</NavLink>
    			</li>
    			<li>
    			<NavLink exact to="/portfolio" activeClassName="navActive">
    				<i className="fas fa-suitcase"></i>
    				<span>Portfolio</span>
    			</NavLink>
    			</li>
    			<li>
    			<NavLink exact to="/contact" activeClassName="navActive">
    				<i className="fas fa-address-book"></i>
    				<span>Contact</span>
    			</NavLink>
    			</li>
    		</ul>
    	</div>

    	<div className="socialNetwork">
    		<ul>
    			<li>
    				<a href="https://www.linkedin.com/in/john-tcha/" target="blank" rel="noopener noreferrer">
    				<i className="fab fa-linkedin"></i>
    				</a>
    			</li>
    			<li>
    				<a href="https://github.com/johntcha" target="blank" rel="noopener noreferrer">
    				<i className="fab fa-github"></i>
    				</a>
    			</li>
    		</ul>
    	</div>
    	<div className="signature">
    		<p>John Tcha - React - 2021</p>
    	</div>
    </div>
  )
}

export default Navigation;