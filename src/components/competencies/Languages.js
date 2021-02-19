import React, { Component } from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
	state = {
		competencies: [
			{id: 1, value: "CSS"},
			{id: 2, value: "JavaScript"},
			{id: 3, value: "Java"},
			{id: 4, value: "PHP"},
			{id: 5, value: "SQL"}
		],
		languages: [
			{id: 1, value: "Français : langue maternelle"},
			{id: 2, value: "Anglais : courant professionnel (TOEIC 890)"},
			{id: 3, value: "Japonais : intermédiaire (B1/B2)"}
		]
	}
	render() {
		let {competencies, languages} = this.state;

		return (
			<div className="languagesFrameworks">
				<ProgressBar 
					languages={competencies}
					className="languagesDisplay"
					title="competencies"
				/>
				<ProgressBar 
				languages={languages}
				className="frameworksDisplay"
				title="languages"
				/>
				<div className="otherSkills">
		    		<h3>Autres compétences</h3>
		    		<div className="list">
		    			<ul>
		    				<li>
		    					<i className="fas fa-check-square"></i>
		    					Pack office
		    				</li>
		    				<li>
		    					<i className="fas fa-check-square"></i>
		    					Git/Github
		    				</li>
		    				<li>
		    					<i className="fas fa-check-square"></i>
		    					Méthodologie agile : Scrum
		    				</li>
		    				<li>
		    					<i className="fas fa-check-square"></i>
		    					Photoshop
		    				</li>
		    			</ul>
		    			<ul>
		    				<li>
		    					<i className="fas fa-check-square"></i>
		    					Travail en équipe
		    				</li>
		    				<li>
		    					<i className="fas fa-check-square"></i>
		    					Communication
		    				</li>
		    				<li>
		    					<i className="fas fa-check-square"></i>
		    					Organisation
		    				</li>
		    				<li>
		    					<i className="fas fa-check-square"></i>
		    					Adaptation
		    				</li>
		    			</ul>
		    		</div>
		    	</div>
			</div>

		);
	}
}

export default Languages;
