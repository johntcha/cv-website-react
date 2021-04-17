import React from 'react';

const Experience = (props) => {
    return (
        <div className="experience">
            <h3>Expérience</h3>
            <div className="exp1">
                <h4>Ingénieur développeur fullstack stagiaire - Capgemini</h4>
                <h5><i className="fas fa-map-marker-alt"></i>
            Issy-les-Moulineaux, France</h5>
                <h6>Mars 2021 - Août 2021</h6>
                <p>
                    Travail sur le projet GARI (Give And Receive to Improve), qui est une plateforme de partage digitale en peer to peer au sein de Capgemini:
                    <li>- Ajout de nouvelles fonctionnalités à l'application</li>
                    <li>- Correction de bugs</li>
                    <li>- Rédaction de documentation</li>
                    <li>- Optimisation de l'application et du code</li>
                    <li>- Test unitaire/ E2E</li>
    		</p>
            </div>
            <div className="exp2">
                <h4>Ingénieur web stagiare - Weglot</h4>
                <h5><i className="fas fa-map-marker-alt"></i>
            Paris, France</h5>
                <h6>Janvier 2020 - Juillet 2021</h6>
                <p>
                    <ul>
                        <li>- Résoudre des problèmes techniques par email</li>
                        <li>- Développement du Dashbord du Support</li>
                        <li>- Débogage et amélioration de scripts</li>
                    </ul>
                </p>
            </div>
            <div className="exp3">
                <h4>Assistant développeur web - Metropolis Japan</h4>
                <h5><i className="fas fa-map-marker-alt"></i>
            Tokyo, Japon</h5>
                <h6>Mai 2019 - Août 2019</h6>
                <p>
                    Développer et rénover des sites web pour les clients de Metropolis Japan
            </p>
            </div>
        </div>
    )
}

export default Experience;