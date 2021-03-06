import React from 'react';

const hobby = [
    {id: 1, value: "Volley Ball", className: "fas fa-volleyball-ball"},
    {id: 2, value: "Guitare", className: "fas fa-guitar"},
    {id: 3, value: "Manga", className: "fas fa-book"},
    {id: 4, value: "Cuisine", className: "fas fa-utensils"},
    {id: 5, value: "Voyages", className: "fas fa-plane"}
    ];


const Hobbies = () => {
  return (
    <div className="hobbies">
    	<h3>Intérêts</h3>
    	<ul>
        {
           hobby.map((item) => {
               return(
                <li key={item.id} className="hobby">
                <i className={item.className}></i>
                <span>{item.value}</span>
                </li> 
               )
           })
        }
    		
    	</ul>
    </div>
  )
}

export default Hobbies;