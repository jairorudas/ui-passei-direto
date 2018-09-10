import React, {Component} from 'react'
import Card from '../card/card'
import If from '../if'

export default class TabContent extends Component {
    constructor(props){
        super(props)
        this.state = {visible: false, _id: props.id}
    }

    render(){
        return (
            <If show={this.state._id === this.props.active}>
                <div className={this.props.col}>
                    {this.props.children}
                    <Card data={this.props.data} id={this.state._id}/>
                </div>
            </If>
        )
    }
} 