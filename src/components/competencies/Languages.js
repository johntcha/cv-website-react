import React from 'react';
import ProgressBar from "./ProgressBar";


const skills = {
	competencies: [
		{ id: 1, value: "HTML, CSS/SCSS" },
		{ id: 2, value: "JavaScript/TypeScript" },
		{ id: 3, value: "Stack front-end: React, Svelte" },
		{ id: 4, value: "NodeJS (NestJS, Fastify), SQL, MongoDB" },
	],
	languages: [
		{ id: 5, value: "Français : langue maternelle" },
		{ id: 6, value: "Anglais : courant professionnel (TOEIC 890)" },
		{ id: 7, value: "Japonais : intermédiaire (B1/B2)" }
	],
	otherSkills1: [
		{ id: 8, value: "Test unitaire/intégration: Jest, Cypress" },
		{ id: 9, value: "Git, Github/Gitlab" },
		{ id: 10, value: "Méthodologie agile : Scrum, Kanban" },
		{ id: 11, value: "Pack office" },
	],
	otherSkills2: [
		{ id: 12, value: "Travail en équipe" },
		{ id: 13, value: "Communication" },
		{ id: 14, value: "Esprit de synthèse" },
		{ id: 15, value: "Adaptation" }]
}

function Languages() {

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
