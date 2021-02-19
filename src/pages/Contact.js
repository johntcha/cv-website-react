import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
		return (
			<div className="contact">
			<Navigation />
			<div className="contactContent">
				<div className="header"></div>
					<div className="contactBox">
						<h1>Contactez-moi</h1>
						<ul>
							<li>
								<i className="fas fa-map-marker-alt"></i>
								<span>Touquin, 77131 - France</span>
							</li>
							<li>
								<i className="fas fa-mobile-alt"></i>
								<span>06 59 02 16 63</span>
							</li>
							<li>
								<i className="far fa-envelope"></i>
								<span>johntcha94@gmail.com</span>
							</li>
						</ul>
					</div>
					<div className="socialNetwork">
						<ul>
							<a href="https://www.linkedin.com/in/john-tcha/" target="_blank"
							rel="noopener noreferrer">
								<h4>LinkedIn</h4>
								<i className="fab fa-linkedin"></i>
							</a>
							<a href="https://github.com/johntcha" target="_blank"
							rel="noopener noreferrer">
								<h4>Github</h4>
								<i className="fab fa-github"></i>
							</a>
						</ul>
					</div>
			</div>
			</div>
			);
	
};

export default Contact;