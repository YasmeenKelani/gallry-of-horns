 
import React from 'react'

class Hornedbeast extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.keyword} title={this.props.horns} />
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default Hornedbeast