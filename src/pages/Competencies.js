import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/competencies/Languages';
import Experience from '../components/competencies/Experience';
import Hobbies from '../components/competencies/Hobbies';
import Formation from '../components/competencies/Formation';

const Competencies = () => {
  return (
    <div className="knowledges">
    	<Navigation/>
    	<div className="knowledgesContent">
    		<Languages />
    		<Experience />
            <Formation />
    		<Hobbies />
    	</div>
    
    </div>
  )
}

export default Competencies;