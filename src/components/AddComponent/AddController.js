import React, { useState } from 'react'
import AddForm from './AddForm'
import AddIcons from './AddIcons'
import IslandStore from '../actions/store'

function AddController(){
    const [villagerImage, setVillagerImage] = useState('4.gif')
    
    function setRandomVillager(){
        const rand = Math.ceil(Math.random() * 10)
        setVillagerImage(`${rand}.gif`)
    }

    function addVillager(newVillager){
        newVillager.image = villagerImage
        IslandStore.addVillager(newVillager)
    }

    return (
        <React.Fragment>
                <AddIcons 
                    image = {villagerImage}
                    randomize={setRandomVillager}/>

                <AddForm 
                    image={villagerImage}
                    addVillager={addVillager}
                />
        </React.Fragment>

    )
}

export default AddController