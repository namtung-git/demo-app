import React from 'react'
import VillagerImage from '../utils/VillagerImage'

const styles = {
    button: {
        margin: '12px 0'
    },
    buttonSmall: {
        width: 'auto'
    },
    image: {
        height: 200,
        width: 'auto',
        margin: '24px 0'
    }
}
function AddIcons(props){
    const {image, randomize} = props
    return (
        <div className="villager-form">
            <VillagerImage style={styles.image} image = {image}/>

            <button
                className = "btn"
                type = "randomize"
                style = {{...styles.button, ...styles.buttonSmall}}
                onClick={randomize}
                >
                Show random
            </button>
        </div>
    )
}
export default AddIcons
