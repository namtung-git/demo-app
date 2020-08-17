import React from 'react'

class VillagerImage extends React.Component {
    render() {
        return this.props.image
            ? <img
                style={this.props.style}
                src={require(`../assets/images/${this.props.image}`)}
                alt="Villager"/>
            : null
    }
}

export default VillagerImage