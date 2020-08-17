import React from 'react'
import Card from './Card'

function EditList(props){
    return (
        <div className="villager-list">
            {
                props.villagers.map(villager => (
                    <Card
                        key={villager._id}
                        image={villager.image}
                        firstName={villager.firstName}
                        lastName={villager.lastName}
                        title={villager.job}
                        onRemove={() => props.removeVillager(villager)}
                        onEdit={()=> props.openEditor(villager)}
                    />
                ))
            }
        </div>
    )
}

export default EditList