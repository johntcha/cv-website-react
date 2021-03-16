import React, { useState } from 'react';

function Project(props) {

	const [showInfo, setShowInfo] = useState(false);

	const handleInfo = () => {
		setShowInfo(!showInfo);
	}

	const { name, languagesIcons, source, info, picture } = props.item;

	return (
		<div className="project">
			<div className="icons">
				{languagesIcons.map(icon =>
					<i className={icon} key={icon}></i>
				)}
			</div>
			<h3>{name}</h3>
			<img src={picture} alt="" onClick={handleInfo} />
			<span className="infos" onClick={handleInfo}>
				<i className="fas fa-plus-circle"></i>
			</span>

			{
				showInfo && (
					<div className="showInfos">
						<div className="infosContent">
							<div className="head">
								<h2>{name}</h2>
								<div className="sourceCode">
									<a href={source} rel="noopener noreferrer"
										className="button" target="_blank">Code source</a>
								</div>
							</div>

							<p className="text">{info}</p>

							<div className="button return" onClick={handleInfo}>
								Retourner sur la page
									</div>
						</div>
					</div>
				)
			}
		</div>
	);
}

export default Project;