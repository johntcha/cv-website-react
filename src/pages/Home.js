import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
    	<Navigation />
    	<div className="homeContent">
    		<div className="content">
    			<h1>John Tcha</h1>
                <h2>Ingénieur développeur full stack
                stagiaire chez Capgemini</h2>
                <div className="resumes">
    			<div className="pdf">
    				<a href="./images/CV-john-tcha.pdf" >CV Français</a>
    			</div>
                <div className="pdf">
                    <a href="./images/resume-john-tcha-english.pdf" target="_blank">CV Anglais</a>
                </div>
                <div className="pdf">
                    <a href="./images/rirekisho_john.pdf" target="_blank">CV Japonais</a>
                </div>
                </div>
    		</div>
    	</div>
    </div>
  );
};

export default Home;