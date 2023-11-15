import { useState, useEffect } from 'react';
import img from '../../img/about/silhouette.png'
import TechCard from "../TechCard/TechCard";
// import data from '../../data/skills.json';

const About = () => {

  const [skills, setSkills] = useState([]);

    useEffect(() => {
      // Effectue une requête GET 
      fetch('http://localhost:3001/api/skills')
        .then(response => response.json())
        .then(data => 
            setSkills(data))
        .catch(error => console.error('Erreur lors du chargement des cartes', error));
    }, []); 
    console.log("Skill Data:", skills);

  return (
    <section className="about" id="About">
      <h2 className="about__title">Je m'appelle Emmanuelle. Bienvenue sur mon portfolio.</h2>
      <div className="about__columns">
        <div className="skills">
          <h3 className="skills__title">Mon parcours</h3>
          <div className="skills__text">
            <p>J'ai étudié la littérature. <span>J'ai appris</span> à garder l'esprit ouvert et à développer mon sens critique...</p>
            <p>J'ai été chargée de clientèle. <span>J'ai appris</span> à anticiper les problèmes et à imaginer des solutions...</p>
            <p>J'ai été correctrice. <span>J'ai appris</span> à faire attention aux détails et à me montrer exigeante...</p>
            <p>Aujourd'hui, j'ai terminé ma formation d'intégrateur Web chez OpenClassrooms et j'ai développé de nouvelles compétences.<br />Voici ce que <span className="innerText">j'ai appris</span> (et ce n'est qu'un début !):</p>
          </div>
        </div>
        <div className="portrait">
          <img src={img} alt='silhouette' />
        </div>
      </div>
      <div className="skills__ctn">
        {skills.map(skill => (
          <TechCard
            key={skill.id}
            skill={skill}
          />
        ))}
      </div>
    </section>
  )

}

export default About;