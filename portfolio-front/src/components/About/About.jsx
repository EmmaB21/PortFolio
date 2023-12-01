import { useState, useEffect } from 'react';
import { fetchInfo } from '../../service/API';
import img from '../../img/about/silhouette.webp'
import TechCard from "../TechCard/TechCard";

const About = () => {

  const [skills, setSkills] = useState([]);

    useEffect(() => {
      // Requête GET pour récupérer les cartes "skills"
      fetch(fetchInfo.skills)
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
            <p>Dans mes précédentes aventures, j'ai étudié la littérature. <span>J'ai appris</span> à garder l'esprit ouvert et à développer mon sens critique...</p>
            <p>J'ai été chargée de clientèle. <span>J'ai appris</span> à anticiper les problèmes et à imaginer des solutions...</p>
            <p>J'ai été correctrice. <span>J'ai appris</span> à faire attention aux détails et à me montrer exigeante...</p>
            <p>Aujourd'hui, je découvre avec envie et curiosité l'univers du développement Web. Au cours de ma formation chez OpenClassrooms, j'ai acquis de nouvelles compétences.<br /><span className="innerText">J'ai appris</span> à manier de nouveaux outils, certes. Mais la maîtrise naît de la pratique. M'accompagnerez-vous dans cette nouvelle aventure ?</p>
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