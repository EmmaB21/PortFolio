

function TechCard({ skill }) {
    return (
        <article className="techCard">
            <img src={`http://localhost:3001/images/${skill.image}`}
                alt={skill.alt} />
            <p>{skill.nom}</p>
        </article>
    )
}

export default TechCard