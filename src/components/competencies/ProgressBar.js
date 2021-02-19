import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
    	<h3>{props.title}</h3>

    	<div>
    		{
    			props.languages.map((item) =>{

    				return (
    					<div key={item.id} className="languagesList">
    						<li>{item.value}</li>
    					</div>
    				)
    			})
    		}
    	</div>	
    </div>
  )
}

export default ProgressBar;