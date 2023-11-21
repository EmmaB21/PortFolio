import { baseURL } from "../../service/API"

function TechCard({ skill }) {
    return (
        <article className="techCard">
            <img src={`${baseURL}/images/${skill.image}`}
                alt={skill.alt} />
            <p>{skill.nom}</p>
        </article>
    )
}

export default TechCard