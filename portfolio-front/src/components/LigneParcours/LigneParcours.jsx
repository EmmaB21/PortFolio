
function LigneParcours({ id, title, text1, text2}) {
    
    return (
        <div className="ligne typing-animation">
            <div className='ligne-div ligne__title' >{title}</div>
            <div className='ligne-div ligne__text ' >
                <span>{text1}<span className="innerText">J'ai appris</span>{text2}</span>
            </div>
        </div>

    )
}

export default LigneParcours; 