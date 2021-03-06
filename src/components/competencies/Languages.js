import React, { Component } from 'react';
import ProgressBar from "./ProgressBar";


const skills = {
		competencies: [
			{id: 1, value: "CSS"},
			{id: 2, value: "JavaScript"},
			{id: 3, value: "Java"},
			{id: 4, value: "PHP"},
			{id: 5, value: "SQL"}
		],
		languages: [
			{id: 6, value: "Français : langue maternelle"},
			{id: 7, value: "Anglais : courant professionnel (TOEIC 890)"},
			{id: 8, value: "Japonais : intermédiaire (B1/B2)"}
		],
		otherSkills1: [
			{id: 9, value: "Pack office"},
			{id: 10, value: "Git/Github"},
			{id: 11, value: "Méthodologie agile : Scrum"},
			{id: 12, value: "Photoshop"}
		],
		otherSkills2: [
		{id: 13, value: "Travail en équipe"},
		{id: 14, value: "Communication"},
		{id: 15, value: "Organisation"},
		{id: 16, value: "Adaptation"}]
	}

function Languages(props){

		return (
			<div className="languagesFrameworks">
				<ProgressBar 
					languages={skills.competencies}
					className="languagesDisplay"
					title="competencies"
				/>
				<ProgressBar 
				languages={skills.languages}
				className="frameworksDisplay"
				title="languages"
				/>
				<div className="otherSkills">
		    		<h3>Autres compétences</h3>
		    		<div className="list">
		    			<ul>
		    			{skills.otherSkills1.map((item) => {
		    				return (
    					<li key={item.id}>
		    					<i className="fas fa-check-square"></i>
		    					{item.value}
		    			</li>
    						)
		    			})
		    			}	
		    			</ul>
		    			<ul>
		    				{skills.otherSkills2.map((item) => {
		    				return (
    					<li key={item.id}>
		    					<i className="fas fa-check-square"></i>
		    					{item.value}
		    			</li>
    						)
		    			})
		    			}
		    			</ul>
		    		</div>
		    	</div>
			</div>

		);
	};

export default Languages;
