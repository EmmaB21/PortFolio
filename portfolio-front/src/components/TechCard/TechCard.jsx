

function TechCard({ skill }) {
    return (
            <article className="techCard">
                <img src={skill.image} alt={skill.alt} />
                <p>{skill.nom}</p>  
            </article>
    )
}

export default TechCard