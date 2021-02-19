import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
    	<h3>Intérêts</h3>
    	<ul>
    		<li className="hobby">
    			<i className="fas fa-volleyball-ball"></i>
    			<span>Volley ball</span>
    		</li>
    		<li className="hobby">
    			<i className="fas fa-guitar"></i>
    			<span>Guitare</span>
    		</li>
    		<li className="hobby">
    			<i className="fas fa-book"></i>
    			<span>Manga</span>
    		</li>
    		<li className="hobby">
    			<i className="fas fa-utensils"></i>
    			<span>Cuisine</span>
    		</li>
    		<li className="hobby">
    			<i className="fas fa-plane"></i>
    			<span>Voyages</span>
    		</li>
    	</ul>
    </div>
  )
}

export default Hobbies;