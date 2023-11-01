import img from '../../img/about/silhouette.webp'
// import LigneParcours from "../LigneParcours/LigneParcours";
import TechCard from "../TechCard/TechCard";
import data from '../../data/skills.json';

const About = () => {

  return (
    <section className="about" id="About">
      <h2 className="about__title">Je m'appelle Emma. Bienvenue sur mon portfolio</h2>
      <div className="about__columns">
        <div className="pres">
          <h3 className="pres__title">Mon parcours</h3>
          <p className="pres__text">...J'ai étudié la littérature. <span>J'ai appris</span> à garder l'esprit ouvert et à développer mon sens critique...</p>
          <p className='pres__text'>...J'ai été chargée de clientèle. <span>J'ai appris</span> à anticiper les problèmes et à imaginer des solutions...</p>
          <p className='pres__text'>...J'ai été correctrice. <span>J'ai appris</span> à faire attention aux détails et à me montrer exigeante...</p>
        </div>
        <div className="skills">
          <h3 className="skills__title">Mes compétences</h3>
          <p className='skills__text'>Aujourd'hui, j'ai terminé ma formation d'intégrateur Web chez OpenClassrooms et j'ai développé de nouvelles compétences.<br/>Voici ce que <span className="innerText">j'ai appris</span>:</p>
          <div className="skills__ctn">
            {data.map(skill => (
              <TechCard
                key={skill.id}
                skill={skill} 
                />
            ))}
          </div>
        </div>
        <div className="portrait">
          <img src={img} alt='silhouette'/>
        </div>
      </div>
      {/* <div className="up-content">
        <div className='left-content'>
          <h2 className='about__title typing-animation'>Mon parcours</h2>
          <div className='lignes__ctn'>
            <LigneParcours
              title="Dans une autre vie, ..."
              text1=" j'ai étudié la littérature. "
              text2=" à garder l'esprit ouvert et à développer mon sens critique." />
            <LigneParcours
              title="Plus tard, ..."
              text1=" j'ai été chargée de clientèle. "
              text2=" à anticiper les problèmes et à imaginer des solutions." />
            <LigneParcours
              title="Et puis, ..."
              text1=" j'ai été correctrice. "
              text2=" à faire attention aux détails et à me montrer exigeante." />
          </div>
        </div>
        <div className='right-content'>
          <p className='right-content__title'>Aujourd'hui,</p>
          <p className='right-content__text'>j'ai terminé ma formation d'intégrateur Web chez OpenClassrooms et j'ai développé de nouvelles compétences.<br/>Voici ce que <span className="innerText">j'ai appris</span>:</p>
          <div className="tech-container">   
            {data.map(skill => (
              <TechCard 
              key={skill.id} 
              skill={skill} />
            ))}
          </div>
          <p className='right-content__text'>Et ce n'est qu'un début !</p>
        </div>
      </div> */}
    </section>
  )

}

export default About;