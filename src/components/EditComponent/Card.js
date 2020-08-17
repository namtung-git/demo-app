import React from 'react'
import VillagerImage from '../utils/VillagerImage'

function Card(props) {
    
    const { image, firstName, lastName, title, style, onRemove, onEdit } = props
    let fullName = firstName +" "+lastName

    return (
        <div className="card" style={style}>
            <div className="card__content">
                <VillagerImage style={{height: 80}} image={image}/>
                <div className="card__info">
                    <span className="card__fullname">{fullName}</span>
                    <span className="card__title">{title}</span>
                </div>
                <button onClick={onRemove} className="card__btn">✕</button>
                <button onClick={onEdit} className="card__edit">Edit</button>

            </div>
        </div>
    )
}

export default Card