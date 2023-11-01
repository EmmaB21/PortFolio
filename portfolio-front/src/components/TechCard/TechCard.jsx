import img  from "../../img/icones/sass.webp"

function TechCard({ skill }) {
    return (
            <article className="techCard">
                <img src={img} alt=""/>
                {/* <img src={skill.image} alt={skill.alt} /> */}
                <p>{skill.nom}</p>  
            </article>
    )
}

export default TechCard