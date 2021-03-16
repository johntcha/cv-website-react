import React from 'react';

const formation = [
  {
    id: 1,
    name: "Polytech Annecy-Chambéry - Diplôme d'ingénieur",
    year: "2017 - 2021",
    content: `Ecole d’ingénieurs filière IAI
          (Instrumentation Automatique
            Informatique )`,
    className: "form1"
  },
  {
    id: 2,
    name: "Lycée Henri Moissan - CPGE",
    year: "2014 - 2017",
    content: `Classe Préparatoire aux
            Grandes Ecoles en filière Physique
            Sciences de l’Ingénieur`,
    className: "form2"
  },
  {
    id: 3,
    name: "Lycée La Tour des Dames",
    year: "2014",
    content: `Baccalauréat Scientifique`,
    className: "form3"
  }
];

const Formation = () => {
  return (
    <div className="formation">
      <h3>Formation</h3>
      {
        formation.map((item) => {
          return (
            <div key={item.id} className={item.className}>
              <h4>{item.name}</h4>
              <h5>{item.year}</h5>
              <p>{item.content}</p>
            </div>
          )
        })
      }

    </div>
  )
}

export default Formation;