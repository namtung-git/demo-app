import React from 'react'

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
            {image ? <img
                style={styles.image}
                src={require(`../assets/images/${image}`)}
                alt={image}/> :null}

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
