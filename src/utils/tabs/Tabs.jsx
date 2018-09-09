import React, {Component} from 'react'
import './Tabs.scss'

export default class Tab extends Component {
    constructor(props){
        super(props)
        this.state = {...props.titulos}
    }

    renderTabs() {
        return this.props.titulos.map((titulo, i) => 
            (<li key={i} className={`tab ${this.props.col} ${this.props.active === titulo ? 'active' : '' }`} id={titulo} onClick={() => this.props.onClick(titulo)}> { titulo }</li>))
    }

    render(){
        return (
            <ul className="tabs"> 
                {this.renderTabs()}
            </ul>
        )
    }
} 